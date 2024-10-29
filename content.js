const style = document.createElement('style');
style.textContent = `
.diogenes-results {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 400px;
  max-height: 80vh;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  overflow-y: auto;
  z-index: 10000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
}

.diogenes-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #666;
}

.diogenes-loading::after {
  content: '';
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.diogenes-error {
  color: #dc3545;
  padding: 10px;
  margin: 10px 0;
  background: #f8d7da;
  border-radius: 4px;
}

.diogenes-results h1 { font-size: 1.8em; margin: 0.8em 0; }
.diogenes-results h2 { font-size: 1.5em; margin: 0.7em 0; }
.diogenes-results h3 { font-size: 1.3em; margin: 0.6em 0; }
.diogenes-results h4 { font-size: 1.2em; margin: 0.5em 0; }

.diogenes-results p {
  margin: 1em 0;
  color: #2c3e50;
}

.diogenes-results ul, .diogenes-results ol {
  margin: 1em 0;
  padding-left: 2em;
}

.diogenes-results li {
  margin: 0.5em 0;
}

.diogenes-results blockquote {
  border-left: 4px solid #e0e0e0;
  margin: 1em 0;
  padding-left: 1em;
  color: #666;
}

.diogenes-results code {
  background: #f5f7f9;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
}

.diogenes-results pre code {
  display: block;
  padding: 1em;
  overflow-x: auto;
}

.diogenes-results strong {
  color: #1a1a1a;
}

.diogenes-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.diogenes-close:hover {
  background: #f5f5f5;
  color: #333;
}

.diogenes-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.diogenes-title {
  font-size: 1.2em;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}
`;

document.head.appendChild(style);

async function analyzeContent(pageContent, apiKey) {
    const prompt = `You are an expert logician, skilled in finding the logical flaws in arguments. You will read the html after the {{HTML}} token and use that for the argument to analyze.
You will break the text up into factual claims and logical reasoning. For factual claims, it will ignore what appears accurate and check dubious claims against reliable sources, suggesting more accurate information when needed. For logical reasoning, it will identify EVERY logical fallacy and explain it.
You will present your findings in a friendly and accessible markdown format, including a brief summary of the opinion, lists for factual and logical accuracy, and a conclusion rating the argument's strength. It will also provide suggestions for improvement.
The conclusion MUST start with "good argument," "average argument," or "weak argument," based on your perception. No argument is a "good argument" if it has a several factual errors, several logical errors, or if there are major, valid counter-arguments which have been ignored. There is no need to be gentle about this. When coming to this conclusion, special attention must be paid to the logical flaws you have found. If there is additional information which is not included in the writing, but which would change the conclusion in the author's writing, please include that in your own conclusion. If there are particular arguments you are aware of which contradict the author's conclusion, please include those in a new section entitled "Counter-Arguments." Otherwise, feel free to omit this section.
Further, when writing the response, do not assume the user is the author. Instead of "you", write "the author" or something similar.
Please respond ONLY with Markdown.
{{HTML}}
${pageContent}`;

    // Create loading window
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'diogenes-results';
    
    const header = document.createElement('div');
    header.className = 'diogenes-header';
    
    const title = document.createElement('h2');
    title.className = 'diogenes-title';
    title.textContent = 'Analyzing...';
    header.appendChild(title);
    
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.className = 'diogenes-close';
    closeButton.onclick = () => resultsDiv.remove();
    header.appendChild(closeButton);
    
    resultsDiv.appendChild(header);

    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'diogenes-loading';
    loadingDiv.textContent = 'Analyzing content';
    resultsDiv.appendChild(loadingDiv);
    
    document.body.appendChild(resultsDiv);

    try {
        console.log('Sending request to Gemini API...');
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

        const requestBody = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 2048,
            },
            safetySettings: [
                {
                    category: "HARM_CATEGORY_HARASSMENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    category: "HARM_CATEGORY_HATE_SPEECH",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                }
            ]
        };

        console.log('Request body:', requestBody);

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
                signal: controller.signal
            }
        );

        clearTimeout(timeoutId);
        console.log('Received response from Gemini API');

        const data = await response.json();
        console.log('Parsed response:', data);

        if (data.error) {
            if (data.error.details?.[0]?.reason === 'API_KEY_INVALID') {
                await chrome.storage.local.remove('apiKey');
                throw new Error('Invalid API key');
            }
            throw new Error(data.error.message);
        }

        // Update content
        title.textContent = 'Logical Analysis';
        loadingDiv.remove();
        
        const contentDiv = document.createElement('div');
        const markdownContent = data.candidates[0].content.parts[0].text;
        console.log('Markdown content:', markdownContent);
        contentDiv.innerHTML = marked.parse(markdownContent);
        resultsDiv.appendChild(contentDiv);

    } catch (error) {
        console.error('Error in analysis:', error);
        loadingDiv.remove();
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'diogenes-error';
        errorDiv.textContent = error.name === 'AbortError' 
            ? 'Analysis timed out. Please try again with a smaller selection of text.'
            : `Error analyzing content: ${error.message}`;
        resultsDiv.appendChild(errorDiv);
    }
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'analyze') {
        console.log('Received analyze request');
        const pageContent = document.body.innerHTML;
        const { apiKey } = await chrome.storage.local.get('apiKey');
        
        if (!apiKey) {
            console.error('No API key found');
            return;
        }

        analyzeContent(pageContent, apiKey);
    }
});
