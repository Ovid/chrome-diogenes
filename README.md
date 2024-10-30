# Diogenes

A Chrome plugin to help you search for truth.

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

# License

This project is licensed under the MIT license.

# Installation

1. Clone the repository
2. Type `chrome://extensions/` in your Google Chrome browser
3. Enable developer mode (should be in the top right corner)
4. Click on "Load unpacked" (should be in the top left corner)
5. Select the folder where you cloned the repository
6. You should see the Diogenes icon in the top right corner of your browser

# Usage

When you first run the plugin, you will be asked to provide an API key. You
can get one at [ai.google.dev](https://ai.google.dev/). Once you have the key,
you can click on the Diogenes icon and paste the key in the input field. You
will only need to do this once. This API is free to use, but there are limits.
See "Billing" at the bottom of this document for more information.

This key is stored in your browser's local storage and is used to make
requests. It is not shared with anyone.

# Screenshot

The following screenshot shows an example of the output. Of course, in real life,
you'd want to scroll down to see the full analysis of the argument, which I've
included below the screenshot.

<img width="1444" alt="Screenshot 2024-10-29 at 18 20 02" src="https://github.com/user-attachments/assets/cdc82473-7d33-44c7-8e10-258b36e75cc0">

# Example Response

The following is a sample response from visiting the [Flat Earth Society FAQ](https://wiki.tfes.org/Flat_Earth_-_Frequently_Asked_Questions).

---

# Logical Analysis

The author of this FAQ page for the Flat Earth Society presents the argument that the Earth is flat. The author believes that the Earth is a disk with the North Pole at the center and Antarctica as a wall surrounding the known continents.

Here are the factual claims made by the author, along with their accuracy:

**Factual Claims:**

* **Claim:** The Flat Earth Society is a group actively promoting the Flat Earth Movement worldwide.
    * **Accuracy:** This claim is accurate. The Flat Earth Society is a real organization that promotes the idea of a flat Earth.
* **Claim:** The Bedford Level Experiment proved the surface of the water to be flat and did not conform to the curvature of the Earth.
    * **Accuracy:** This claim is inaccurate. The Bedford Level Experiment was a series of experiments conducted in the 19th century to test the curvature of the Earth. The results were inconclusive and did not prove that the Earth is flat.
* **Claim:** Space agencies are involved in a conspiracy faking space travel and exploration.
    * **Accuracy:** This claim is unsupported. There is overwhelming evidence that space travel is real, and there is no credible evidence to support the claim of a conspiracy.
* **Claim:** Photographic evidence is easily manipulated and altered.
    * **Accuracy:** This claim is true, but it is irrelevant to the argument. Photographs can be manipulated, but this does not mean that all photographs are fake.
* **Claim:** It is impossible to see the curvature of the Earth from a commercial airplane.
    * **Accuracy:** This claim is inaccurate. The curvature of the Earth can be seen from high altitudes, and commercial airplanes fly high enough for passengers to see it.
* **Claim:** The Earth is constantly accelerating upwards at a rate of 32 feet per second squared (or 9.8 meters per second squared).
    * **Accuracy:** This claim is incorrect. The Earth is not accelerating upwards, and the force of gravity is not caused by acceleration.
* **Claim:** Planets are orbiting astronomical objects, and the Earth is not a planet because it sits at the center of our solar system.
    * **Accuracy:** This claim is incorrect. The Earth is a planet, and it orbits the Sun.

Here are the logical fallacies found in the author's argument:

**Logical Fallacies:**

* **Ad Hominem:** The author attacks the motives of space agencies rather than addressing the evidence for a round Earth. For example, the author claims that space agencies are faking space travel to save money or for political gains. This is an ad hominem fallacy because it attacks the character of the space agencies rather than the validity of their claims.
* **Appeal to Emotion:** The author appeals to emotion by suggesting that the round Earth theory is a "doctrine" that is being forced upon people. This is an appeal to emotion because it plays on people's fear of authority and their desire to be independent thinkers.
* **Appeal to Ignorance:** The author argues that the burden of proof lies on those who believe in a round Earth. This is an appeal to ignorance because it assumes that the absence of evidence for a flat Earth is evidence for a flat Earth.
* **False Dichotomy:** The author presents a false dichotomy by suggesting that the only two possibilities are a round Earth and a flat Earth. This is a false dichotomy because there are other possibilities, such as a spherical Earth with a different shape than the one commonly accepted.
* **Hasty Generalization:** The author makes a hasty generalization by assuming that all photographs of the Earth are fake. This is a hasty generalization because it draws a conclusion from a small sample size.
* **Straw Man:** The author misrepresents the arguments of those who believe in a round Earth. For example, the author claims that those who believe in a round Earth think that gravity pulls the Earth into a sphere. This is a straw man fallacy because it misrepresents the actual argument.
  
**Conclusion:**

This is a _weak argument_. The author makes several inaccurate factual claims and relies on logical fallacies to support their argument. The author also ignores the overwhelming evidence that the Earth is round.

**Suggestions for Improvement:**

* The author should provide evidence to support their claims rather than relying on speculation and conspiracy theories.
* The author should avoid using ad hominem attacks and appeals to emotion.
* The author should acknowledge the evidence for a round Earth and address the counter-arguments to their own position.

**Counter-Arguments:**

* There is overwhelming scientific evidence that the Earth is round. This evidence includes observations of the Earth from space, the curvature of the Earth's shadow on the Moon, and the fact that ships disappear hull first over the horizon.
* The Flat Earth Society's claims about the Bedford Level Experiment, space travel, and photographic evidence are not supported by credible evidence.
* The Flat Earth Society's model of the Earth does not explain many observed phenomena, such as the phases of the Moon, the fact that the Sun and Moon appear to be the same size in the sky, and the fact that different stars are visible from different parts of the Earth.

---

# Billing

To use this plugin, you need a Google API Key. You
can get one at [ai.google.dev](https://ai.google.dev/). Once there,
click the link which reads "Get API Key in Google AI Studio".

![image](https://github.com/user-attachments/assets/fc44554e-81f5-4c25-8763-38227be209e3)

On the following page, click "Create API Key."

![image](https://github.com/user-attachments/assets/2d46c1e2-5f7f-4b50-b257-616a05cc5fde)

This key is free to use! No costs to you for this service. However, the number of requests
you can make are limited. If you use this frequently, click the "Go to Billing" link at the
bottom right of the page to set up payment.

If you lose your API key, you can revisit this page and either generate a new key, or click
on your existing API key and click "Copy" in the popop which appears.
