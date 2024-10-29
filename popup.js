document.addEventListener('DOMContentLoaded', async () => {
  const apiKeyForm = document.getElementById('apiKeyForm');
  const mainContent = document.getElementById('mainContent');
  const apiKeyInput = document.getElementById('apiKeyInput');
  const saveApiKeyButton = document.getElementById('saveApiKey');
  const analyzeButton = document.getElementById('analyze');
  const statusDiv = document.getElementById('status');

  // Check if API key exists
  const { apiKey } = await chrome.storage.local.get('apiKey');
  if (!apiKey) {
    apiKeyForm.style.display = 'block';
  } else {
    mainContent.style.display = 'block';
  }

  // Save API key
  saveApiKeyButton.addEventListener('click', async () => {
    const newApiKey = apiKeyInput.value.trim();
    if (!newApiKey) {
      statusDiv.textContent = 'Please enter an API key';
      statusDiv.className = 'error';
      return;
    }

    // Validate API key using background script
    const response = await chrome.runtime.sendMessage({
      type: 'validateApiKey',
      apiKey: newApiKey
    });

    if (response.isValid) {
      await chrome.storage.local.set({ apiKey: newApiKey });
      apiKeyForm.style.display = 'none';
      mainContent.style.display = 'block';
      statusDiv.textContent = 'API key saved successfully';
      statusDiv.className = '';
    } else {
      statusDiv.textContent = 'Invalid API key';
      statusDiv.className = 'error';
    }
  });

  // Analyze button click handler
  analyzeButton.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tab.id, { action: 'analyze' });
    // Close the popup after sending the message
    window.close();
  });
});
