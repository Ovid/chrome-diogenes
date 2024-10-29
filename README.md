# Diogenes

A Chrome plugin to help you search for truth.

For any web page you visit, you can click on Diogenes and ask it to analyze
the page you are on. It will make a request to the Google Gemini API to
analyze the page for logical and factual errors.

The structure of the response in the resulting popup will be:

1. A summary of the argument
2. A logical analysis
3. Logical fallacies
4. Conclusion
5. Suggestions for improvement if the argument is flawed

Note that the headings might vary depending on the response from the API.

# Installation

1. Clone the repository
2. Go to `chrome://extensions/`
3. Enable developer mode (should be in the top right corner)
4. Click on "Load unpacked" (should be in the top left corner)
5. Select the folder where you cloned the repository
6. You should see the Diogenes icon in the top right corner of your browser

# Usage

When you first run the plugin, you will be asked to provide an API key. You
can get one at [ai.google.dev](https://ai.google.dev/). Once you have the key,
you can click on the Diogenes icon and paste the key in the input field. You
will only need to do this once.

This key is stored in your browser's local storage and is used to make
requests. It is not shared with anyone.
