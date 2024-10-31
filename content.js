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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
  color: #333 !important;
  box-sizing: border-box !important;
}

.diogenes-results * {
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: inherit !important;
  line-height: inherit !important;
}

.diogenes-results h1,
.diogenes-results h2,
.diogenes-results h3,
.diogenes-results h4 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  font-weight: 600 !important;
  color: #1a1a1a !important;
  margin: 1em 0 0.5em 0 !important;
}

.diogenes-results h1 { font-size: 1.8em !important; }
.diogenes-results h2 { font-size: 1.5em !important; }
.diogenes-results h3 { font-size: 1.3em !important; }
.diogenes-results h4 { font-size: 1.2em !important; }

.diogenes-results p {
  margin: 1em 0 !important;
  color: #2c3e50 !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
}

.diogenes-results ul,
.diogenes-results ol {
  margin: 1em 0 !important;
  padding-left: 2em !important;
  list-style-position: outside !important;
}

.diogenes-results ul {
  list-style-type: disc !important;
}

.diogenes-results ol {
  list-style-type: decimal !important;
}

.diogenes-results li {
  margin: 0.5em 0 !important;
  line-height: 1.6 !important;
}

.diogenes-results blockquote {
  border-left: 4px solid #e0e0e0 !important;
  margin: 1em 0 !important;
  padding: 0.5em 0 0.5em 1em !important;
  color: #666 !important;
  background: #f8f9fa !important;
}

.diogenes-results code {
  background: #f5f7f9 !important;
  padding: 0.2em 0.4em !important;
  border-radius: 3px !important;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;
  font-size: 0.9em !important;
  color: #476582 !important;
}

.diogenes-results pre {
  background: #f5f7f9 !important;
  padding: 1em !important;
  border-radius: 4px !important;
  overflow-x: auto !important;
  margin: 1em 0 !important;
}

.diogenes-results pre code {
  padding: 0 !important;
  background: transparent !important;
  font-size: 13px !important;
  line-height: 1.5 !important;
}

.diogenes-results strong {
  font-weight: 600 !important;
  color: #1a1a1a !important;
}

.diogenes-results em {
  font-style: italic !important;
}

.diogenes-results a {
  color: #0366d6 !important;
  text-decoration: none !important;
}

.diogenes-results a:hover {
  text-decoration: underline !important;
}

.diogenes-loading {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 20px !important;
  color: #666 !important;
  font-size: 14px !important;
}

.diogenes-loading::after {
  content: '' !important;
  width: 20px !important;
  height: 20px !important;
  margin-left: 10px !important;
  border: 2px solid #f3f3f3 !important;
  border-top: 2px solid #3498db !important;
  border-radius: 50% !important;
  animation: diogenesSpinner 1s linear infinite !important;
}

@keyframes diogenesSpinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.diogenes-error {
  color: #dc3545 !important;
  padding: 16px !important;
  margin: 10px 0 !important;
  background: #f8d7da !important;
  border-radius: 4px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
}

.diogenes-error a {
  color: #dc2626 !important;
  text-decoration: underline !important;
  margin-top: 10px !important;
}

.diogenes-error a:hover {
  color: #b91c1c !important;
}

.diogenes-json-container {
  width: 100% !important;
  margin-top: 12px !important;
}

.diogenes-json-toggle {
  background: none !important;
  border: 1px solid #dc3545 !important;
  color: #dc3545 !important;
  padding: 6px 12px !important;
  border-radius: 4px !important;
  cursor: pointer !important;
  font-size: 12px !important;
  margin-bottom: 8px !important;
}

.diogenes-json-toggle:hover {
  background: rgba(220, 53, 69, 0.1) !important;
}

.diogenes-json-content {
  background: #fff !important;
  border: 1px solid #dc3545 !important;
  border-radius: 4px !important;
  padding: 12px !important;
  font-family: monospace !important;
  font-size: 12px !important;
  white-space: pre-wrap !important;
  word-break: break-all !important;
  max-height: 300px !important;
  overflow-y: auto !important;
}

.diogenes-close {
  position: absolute !important;
  top: 10px !important;
  right: 10px !important;
  border: none !important;
  background: none !important;
  font-size: 20px !important;
  cursor: pointer !important;
  color: #666 !important;
  padding: 5px 10px !important;
  border-radius: 4px !important;
  transition: all 0.2s ease !important;
}

.diogenes-close:hover {
  background: #f5f5f5 !important;
  color: #333 !important;
}

.diogenes-header {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin-bottom: 15px !important;
  padding-bottom: 10px !important;
  border-bottom: 1px solid #eee !important;
}

.diogenes-title {
  font-size: 1.2em !important;
  font-weight: 600 !important;
  color: #1a1a1a !important;
  margin: 0 !important;
}

.language-selector {
  margin: 15px 0 !important;
  padding: 10px !important;
  border-top: 1px solid #eee !important;
  border-bottom: 1px solid #eee !important;
}

.language-select {
  width: 100% !important;
  padding: 8px !important;
  margin-top: 5px !important;
  border: 1px solid #ccc !important;
  border-radius: 4px !important;
  font-size: 14px !important;
  background-color: white !important;
}

.language-select:focus {
  outline: none !important;
  border-color: #4285f4 !important;
}
`;

document.head.appendChild(style);

// We ignore the "appeal to authority" fallacy unless the authority is
// obviously not an expert in the field. This is because the LLM would often
// cite this an logical flaw if that appeal isn't also backed up by citations.
// It's not a great way to handle this, but we're still getting strong
// arguments listed as "weak" due to this.
//
// We also ignore numeric information if the numbers are close to the actual
// numbers. This is because we were getting "factual errors" where "almost two
// degrees" did not match "1.8 degrees" in the source.

async function analyzeContent(pageContent, apiKey) {
  // First, remove any existing analysis windows
  const existingResults = document.querySelectorAll('.diogenes-results');
  existingResults.forEach(element => element.remove());

  const { responseLanguage } = await chrome.storage.local.get('responseLanguage');
  
  // Add language requirement to prompt
  let languagePrompt = '';
  if (responseLanguage === 'article') {
    languagePrompt = `- YOUR RESPONSE MUST BE WRITTEN IN THE SAME LANGUAGE AS THE ARTICLE.
- Maintain natural, fluent writing style appropriate for that language.
- Use appropriate idioms and expressions for that language.`;
  } else {
    const languageMap = {
      'en': 'English',
      'fr': 'French',
      'es': 'Spanish',
      'pt': 'Portuguese',
      'it': 'Italian',
      'de': 'German'
    };
    language = languageMap[responseLanguage] || 'English';
    languagePrompt = `Your response MUST be in ${language}.
- Maintain natural, fluent ${language} writing style
- Use appropriate ${language} idioms and expressions`;
  }

    const prompt = `You are an expert logician, skilled in finding the logical flaws in arguments. You will read the html after the {{HTML}} token and use that for the argument to analyze.

You will break the text up into factual claims and logical reasoning. For factual claims, it will ignore what appears accurate and check dubious claims against reliable sources, suggesting more accurate information when needed. For logical reasoning, it will identify EVERY logical fallacy and explain it.

You will present your findings in a friendly and accessible markdown format, including a brief summary of the opinion, lists for factual and logical accuracy, and a conclusion rating the argument's strength. It will also provide suggestions for improvement.

If the author is citing information that does not have a source listed, DO NOT include that in your response unless it is obviously false. This is because your analysis in the past appears to have listed some arguments as weak, even though if the information is true, the argument would be strong.

If the author is using an "appeal to authority", IGNORE THAT IN YOUR RESPONSE unless the authority is obviously not an expert in the field, or the claim made does not match what the authority would say.

If the author is making a dubious claim, IGNORE THAT IN YOUR RESPONSE if the claim is "close" to reality. For example, if the article says "Since the Industrial Revolution, the global annual temperature has increased in total by a little more than 1 degree Celsius, or about 2 degrees Fahrenheit.", the following would be a bad correction and should be excluded: "The global average temperature has increased by about 1.1 degrees Celsius, or about 2 degrees Fahrenheit, since the late 19th century."

If the author is using a "slippery slope" argument, IGNORE THAT IN YOUR RESPONSE if the conclusion is one that is widely accepted or supported by the authorities cited.

When correcting information, try to include a link to a reliable source.

Structure your response as follows:

${languagePrompt}

All headers must on their own lines, start with a "##", and be followed by a blank line.

The response MUST start with the following disclaimer, using a "Disclaimer" header: "This analysis is provided by Google's Gemini. Generative AI can make mistakes, so please verify the information provided. Further, running this more than once can often give different results."

The Summary of the argument is next, and must have a "Summary" header. This should be a brief summary of the author's argument.

Next, we have "Factual Accuracy" and "Logical Accuracy" sections. In these sections, list the factual and logical errors you have found. If there are no errors, state that there are no errors. If there are errors, list them in bullet points. If there are multiple errors, separate them with a blank line.

Next is the conclusion which, after the "Conclusion" header, MUST start with "good argument," "average argument," or "weak argument," based on your perception. No argument is a "good argument" if it has a several factual errors, several logical errors, or if there are major, valid counter-arguments which have been ignored.  When writing the conclusion, do not claim or consider that there are logical or factual errors if you have not reported them. The conclusion must only be based on the information you have provided.

When coming to this conclusion, special attention must be paid to the logical flaws you have found. If there is additional information which is not included in the writing, but which would change the conclusion in the author's writing, please include that in your own conclusion. If there are particular arguments you are aware of which contradict the author's conclusion, please include those in a new section entitled "Counter-Arguments." Otherwise, feel free to omit this section.

Further, when writing the response, do not assume the user is the author. Instead of "you", write "the author" or something similar.

Please respond ONLY with Markdown.

{{HTML}}
${pageContent}`;

    function formatJSON(obj) {
        try {
            return JSON.stringify(obj, null, 2);
        } catch (e) {
            return 'Unable to stringify response: ' + e.message;
        }
    }

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
        logger.info('Sending request to Gemini API...');
        logger.info('Prompt:', prompt);
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
                maxOutputTokens: 4096,
            },
            safetySettings: [
                {
                    category: "HARM_CATEGORY_HARASSMENT",
                    threshold: "BLOCK_ONLY_HIGH"
                },
                {
                    category: "HARM_CATEGORY_HATE_SPEECH",
                    threshold: "BLOCK_ONLY_HIGH"
                },
                {
                    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    threshold: "BLOCK_ONLY_HIGH"
                },
                {
                    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                    threshold: "BLOCK_ONLY_HIGH"
                }
            ]
        };

        logger.info('Request body:', requestBody);

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
        logger.info('Received response from Gemini API');

        const data = await response.json();
        logger.info('Parsed response:', data);

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
        logger.info('Markdown content:', markdownContent);
        contentDiv.innerHTML = marked.parse(markdownContent);
        resultsDiv.appendChild(contentDiv);

    } catch (error) {
                logger.error('Error in analysis:', error);
        loadingDiv.remove();

        const errorDiv = document.createElement('div');
        errorDiv.className = 'diogenes-error';

        const errorMessage = document.createElement('div');
        errorMessage.textContent = error.name === 'AbortError'
            ? 'Analysis timed out. Please try again with a smaller selection of text.'
            : `Error analyzing content: ${error.message}`;
        errorDiv.appendChild(errorMessage);

        // Add JSON response section
        const jsonContainer = document.createElement('div');
        jsonContainer.className = 'diogenes-json-container';

        const jsonToggle = document.createElement('button');
        jsonToggle.textContent = 'Show Response Details';
        jsonToggle.className = 'diogenes-json-toggle';

        const jsonContent = document.createElement('pre');
        jsonContent.className = 'diogenes-json-content';
        jsonContent.style.display = 'none';

        // Format the error response
        let responseText = '';
        if (error.response) {
            try {
                const responseData = await error.response.json();
                responseText = formatJSON(responseData);
            } catch (e) {
                responseText = 'Unable to parse response data: ' + e.message;
            }
        } else {
            responseText = formatJSON({
                error: error.message,
                stack: error.stack,
                name: error.name
            });
        }

        jsonContent.textContent = responseText;

        jsonToggle.onclick = () => {
            const isHidden = jsonContent.style.display === 'none';
            jsonContent.style.display = isHidden ? 'block' : 'none';
            jsonToggle.textContent = isHidden ? 'Hide Response Details' : 'Show Response Details';
        };

        jsonContainer.appendChild(jsonToggle);
        jsonContainer.appendChild(jsonContent);
        errorDiv.appendChild(jsonContainer);

        const retryLink = document.createElement('a');
        retryLink.textContent = 'Try Again';
        retryLink.href = '#';
        retryLink.className = 'diogenes-retry-link';

        retryLink.onclick = async (e) => {
            e.preventDefault();
            errorDiv.remove();
            await analyzeContent(pageContent, apiKey);
        };

        errorDiv.appendChild(retryLink);
        resultsDiv.appendChild(errorDiv);
    }
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'analyze') {
        logger.info('Received analyze request');
        const pageContent = document.body.innerHTML;
        const { apiKey } = await chrome.storage.local.get('apiKey');
        
        if (!apiKey) {
            logger.error('No API key found');
            return;
        }

        analyzeContent(pageContent, apiKey);
    }
});
