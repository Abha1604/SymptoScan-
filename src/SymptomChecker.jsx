import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import SymptomInfo from "./Response";

function SymptomChecker() {
  const [responseData, setResponseData] = useState(null);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    symptoms: "",
    duration: "",
    severity: "",
    additionalInfo: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  function parseSymptomData(resultString) {
  // Trim the unwanted extra characters (keep your logic)
  resultString = resultString.slice(7, resultString.length - 4);

  try {
    const parsed = JSON.parse(resultString);
    
    return {
      title: parsed.title || "Health Insight",
      causes: parsed.causes || [],
      steps: parsed.steps || [],
      emergency: parsed.emergency || [],
      disclaimer: parsed.disclaimer || "",
    };
  } catch (err) {
    console.error("Failed to parse JSON from resultString:", err);
    return {
      title: "Error",
      causes: [],
      steps: [],
      emergency: [],
      disclaimer: "Unable to parse health information.",
    };
  }
}


  const getResults = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/symptom-checker`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.data.result;
 
      // console.log(result);
      const parsed = parseSymptomData(result);
      setResponseData(parsed); 
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <div className="pt-20 pb-16 px-4 max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900">Symptom Checker</h1>
        <p className="text-lg text-gray-600 mb-6">
          Fill in the details below to get health insights
        </p>

        <div className="space-y-4 text-left">
          <input
            type="number"
            placeholder="Your Age"
            value={formData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
            className="border p-2 rounded w-full"
          />
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Describe symptoms..."
            value={formData.symptoms}
            onChange={(e) => handleInputChange("symptoms", e.target.value)}
            className="border p-3 rounded w-full h-28"
          />
          <select
            value={formData.duration}
            onChange={(e) => handleInputChange("duration", e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Duration</option>
            <option>Less than a day</option>
            <option>1-3 days</option>
            <option>4-7 days</option>
          </select>
          <select
            value={formData.severity}
            onChange={(e) => handleInputChange("severity", e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Severity</option>
            <option>Mild</option>
            <option>Moderate</option>
            <option>Severe</option>
          </select>
          <textarea
            placeholder="Additional Info"
            value={formData.additionalInfo}
            onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
            className="border p-3 rounded w-full h-20"
          />
        </div>

        <button
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={getResults}
        >
          Get Results
        </button>

        {responseData && (
          <div className="mt-12">
            <SymptomInfo {...responseData} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SymptomChecker;
