document.addEventListener('DOMContentLoaded', async () => {
    // Get all required DOM elements
    const apiKeyForm = document.getElementById('apiKeyForm');
    const mainContent = document.getElementById('mainContent');
    const apiKeyInput = document.getElementById('apiKeyInput');
    const saveApiKeyButton = document.getElementById('saveApiKey');
    const analyzeButton = document.getElementById('analyze');
    const replaceApiKeyButton = document.getElementById('replaceApiKey');
    const deleteApiKeyButton = document.getElementById('deleteApiKey');
    const statusDiv = document.getElementById('status');

    // Helper function to show status messages
    function showStatus(message, isError = false) {
        console.log('Status:', message, isError); // Debug log
        statusDiv.textContent = message;
        statusDiv.style.display = 'block';
        statusDiv.className = isError ? 'status error' : 'status success';
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 3000);
    }

    // Check if API key exists
    const { apiKey } = await chrome.storage.local.get('apiKey');
    if (!apiKey) {
        apiKeyForm.style.display = 'block';
        mainContent.style.display = 'none';
    } else {
        apiKeyForm.style.display = 'none';
        mainContent.style.display = 'block';
    }

    // Save API key
    saveApiKeyButton?.addEventListener('click', async () => {
        console.log('Save API key clicked'); // Debug log
        const newApiKey = apiKeyInput.value.trim();
        if (!newApiKey) {
            showStatus('Please enter an API key', true);
            return;
        }

        try {
            // Validate API key using background script
            const response = await chrome.runtime.sendMessage({
                type: 'validateApiKey',
                apiKey: newApiKey
            });

            if (response.isValid) {
                await chrome.storage.local.set({ apiKey: newApiKey });
                apiKeyForm.style.display = 'none';
                mainContent.style.display = 'block';
                showStatus('API key saved successfully');
                apiKeyInput.value = '';
            } else {
                showStatus('Invalid API key', true);
            }
        } catch (error) {
            console.error('Error saving API key:', error);
            showStatus('Error saving API key', true);
        }
    });

    // Replace API key button handler
    replaceApiKeyButton?.addEventListener('click', () => {
        console.log('Replace API key clicked'); // Debug log
        mainContent.style.display = 'none';
        apiKeyForm.style.display = 'block';
    });

    // Delete API key button handler
    deleteApiKeyButton?.addEventListener('click', async () => {
        console.log('Delete API key clicked'); // Debug log
        try {
            await chrome.storage.local.remove('apiKey');
            mainContent.style.display = 'none';
            apiKeyForm.style.display = 'block';
            showStatus('API key deleted successfully');
        } catch (error) {
            console.error('Error deleting API key:', error);
            showStatus('Error deleting API key', true);
        }
    });

    // Analyze button click handler
    analyzeButton?.addEventListener('click', async () => {
        console.log('Analyze clicked'); // Debug log
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            chrome.tabs.sendMessage(tab.id, { action: 'analyze' });
            window.close();
        } catch (error) {
            console.error('Error during analysis:', error);
            showStatus('Error analyzing page', true);
        }
    });
});
