// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle any background tasks here if needed
  if (request.type === 'validateApiKey') {
    validateApiKey(request.apiKey)
      .then(isValid => sendResponse({ isValid }));
    return true; // Will respond asynchronously
  }
});

async function validateApiKey(apiKey) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Test message' }] }]
        })
      }
    );
    const data = await response.json();
    return !data.error;
  } catch (error) {
    console.error('Error validating API key:', error);
    return false;
  }
}
