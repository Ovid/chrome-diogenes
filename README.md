# Diogenes

A Chrome extension to help you search for truth.

You can install the plugin locally, [or from the Chrome Web store](https://chromewebstore.google.com/detail/diogenes/ejclefajnpagdpfafajggddaakdiacfe).

# Rationale

In a world rich in disinformation, friend love to send us articles on the web that,
um, give us pause. Diogenes is a Chrome plugin that will let you visit a web page
and click on Diogenes to ask it to analyze the page you are on. It will make
a request to the Google Gemini API to analyze the page for logical and factual
errors.

Note that the exact formatting of the response might vary depending on the
response from the API.

Of course, because this is driven by an LLM, you should consider the results to
a starting point, not a final guide. Generative can AI make mistakes.

# Features

* Analyze web pages for factual and logical errors
* Completely free to use
* No personal data is ever collected
* Open source with a fair license (MIT)
* Choose output in a variety of languages (only a subset for now)
* When possible, links are provided to reliable source material explaining factual errors (not shown in our example below, from an earlier version)

# License

This project is licensed under the MIT license.

# Installation

This has also been submitted to the Chrome store, but it often takes weeks
to get a review.

1. Clone the repository (see below if you just want to download the extension)
2. Type `chrome://extensions/` in your Google Chrome browser
3. Enable developer mode (should be in the top right corner)
4. Click on "Load unpacked" (should be in the top left corner)
5. Select the folder where you cloned the repository
6. You should see the Diogenes icon in the top right corner of your browser

If you don't know how to clone a repository or you just want to download it,
scroll to the top and click on the big, green "<> Code" button. From there,
click on "Download Zip." Unzip the resulting file and continue to step 2 above.

<img src="https://github.com/user-attachments/assets/fa81e903-75a1-4182-81d5-b745125e7ce4" width="400">

# Usage

When you first run the plugin, you will be asked to provide an API key. You
can get one at [ai.google.dev](https://ai.google.dev/). Once you have the key,
you can click on the Diogenes icon and paste the key in the input field. You
will only need to do this once. This API is free to use, but there are limits.
See "Billing" at the bottom of this document for more information.

This key is stored in your browser's local storage and is used to make
requests. It is not shared with anyone.

You can replace or delete your key at any time.

# Screenshot

The following screenshot shows an example of the output. Of course, in real life,
you'd want to scroll down to see the full analysis of the argument. You can
also read the full argument [here](faq_example.md).

<img width="600" alt="Screenshot 2024-10-29 at 18 20 02" src="https://github.com/user-attachments/assets/cdc82473-7d33-44c7-8e10-258b36e75cc0">

---

# Getting an API Key

To use this plugin, you need a Google API Key. You
can get one at [ai.google.dev](https://ai.google.dev/). Once there,
click the link which reads "Get API Key in Google AI Studio".

<img width="600" alt="Screenshot 2024-10-29 at 18 20 02" src="https://github.com/user-attachments/assets/fc44554e-81f5-4c25-8763-38227be209e3">

On the following page, click "Create API Key."

<img width="600" alt="Screenshot 2024-10-29 at 18 20 02" src="https://github.com/user-attachments/assets/2d46c1e2-5f7f-4b50-b257-616a05cc5fde">

This key is free to use! No costs to you for this service. However, the number of requests
you can make are limited. If you use this frequently, click the "Go to Billing" link at the
bottom right of the page to set up payment.

If you lose your API key, you can revisit this page and either generate a new key, or click
on your existing API key and click "Copy" in the popop which appears.
