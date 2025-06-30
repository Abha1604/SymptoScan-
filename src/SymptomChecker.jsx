import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function SymptomChecker() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    symptoms: "",
    duration: "",
    severity: "",
    additionalInfo: "",
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <div className="pt-20 pb-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Symptom Checker</h1>
        <p className="text-lg text-gray-600 mb-4">Answer a few questions to get personalized insights</p>
        <div className="mb-4">
          <progress value={progress} max="100" className="w-full" />
          <p className="text-sm text-gray-500 mt-1">Step {currentStep} of {totalSteps}</p>
        </div>

        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Your Age"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              className="border p-2 rounded w-full max-w-md"
            />
            <select
              value={formData.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="border p-2 rounded w-full max-w-md"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <textarea
            placeholder="Describe symptoms..."
            value={formData.symptoms}
            onChange={(e) => handleInputChange("symptoms", e.target.value)}
            className="border p-4 rounded w-full max-w-md h-32 mt-4"
          />
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <>
            <select
              value={formData.duration}
              onChange={(e) => handleInputChange("duration", e.target.value)}
              className="border p-2 rounded w-full max-w-md mt-4"
            >
              <option value="">Duration</option>
              <option>Less than a day</option>
              <option>1-3 days</option>
              <option>4-7 days</option>
            </select>
            <select
              value={formData.severity}
              onChange={(e) => handleInputChange("severity", e.target.value)}
              className="border p-2 rounded w-full max-w-md mt-2"
            >
              <option value="">Severity</option>
              <option>Mild</option>
              <option>Moderate</option>
              <option>Severe</option>
            </select>
          </>
        )}

        {/* Step 4 */}
        {currentStep === 4 && (
          <textarea
            placeholder="Additional Info"
            value={formData.additionalInfo}
            onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
            className="border p-4 rounded w-full max-w-md h-24 mt-4"
          />
        )}

        <div className="flex justify-center gap-4 mt-8">
          {currentStep > 1 && (
            <button onClick={handlePrevious} className="px-4 py-2 border rounded text-blue-600">
              Previous
            </button>
          )}
          {currentStep < totalSteps ? (
            <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">
              Next
            </button>
          ) : (
            <button className="px-4 py-2 bg-green-600 text-white rounded">Get Results</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SymptomChecker;
