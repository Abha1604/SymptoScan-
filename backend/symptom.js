
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");     

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-2.5-flash";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL });

const checkSymptom = async (req, res) => {
    try {
    const { age, gender, symptoms, duration, severity, additionalInfo } = req.body;

    const prompt = `
You are a helpful and knowledgeable virtual medical assistant.

Based on the user's input, your response should follow this structure:

1. Identify Possible Common Conditions:
Analyze the user's reported symptoms and provide a short list (2–4) of the most likely or common medical conditions that might be associated with their symptoms. Prioritize simple language and common issues unless symptoms clearly suggest otherwise.

2. Recommend Initial Actions or Home Care Steps:
Offer clear, basic next steps the user can take at home. This may include lifestyle tips, over-the-counter options, rest, hydration, or basic monitoring. If appropriate, suggest any initial tests or checks (e.g., temperature, heart rate, home test kits) that might help clarify the situation.

3. Urgent Warning Signs – When to Seek Medical Help:
Clearly state when the user should see a doctor immediately, such as red-flag symptoms (e.g., persistent fever, chest pain, severe dehydration, fainting). Use bullet points to list these red flags.

📥 User Information:
Age: ${age}

Gender: ${gender}

Symptoms: ${symptoms}

Duration: ${duration}

Severity: ${severity}

Additional Info: ${additionalInfo}

Please keep the tone compassionate, clear, and easy to understand. Do not give a diagnosis, but rather offer possible insights and basic guidance.

Close with a standard disclaimer:
"I'm not a doctor. For medical concerns, always consult a healthcare professional."
Also return your response in format:
{
  "title": "Your Health Insight",
  "causes": [
    "Cause 1 with **optional bold** text",
    "Cause 2...",
    "Cause 3..."
  ],
  "steps": [
    "Step 1 with **optional bold** emphasis",
    "Step 2...",
    "Step 3..."
  ],
  "emergency": [
    "Emergency symptom 1 with **bold** if needed",
    "Emergency symptom 2...",
    "Emergency symptom 3..."
  ],
  "disclaimer": "I'm not a doctor. For medical concerns, always consult a healthcare professional."
}

`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();
    console.log("Gemini response:", reply);
    res.send({ result: reply });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).send({ error: "Gemini request failed" });
  }
}




module.exports = { checkSymptom };