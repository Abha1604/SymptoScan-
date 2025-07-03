import React from "react";
import { AlertCircle, CheckCircle, HeartPulse } from "lucide-react";

// Helper to handle **bold** formatting
const renderFormattedText = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    }
    return <span key={idx}>{part}</span>;
  });
};

const SymptomInfo = ({ title, causes, steps, emergency, disclaimer }) => {
  console.log(title, causes, steps, emergency, disclaimer);
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6 border border-gray-200 text-left">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-rose-700">
        {title}
      </h2>

      {/* Causes */}
      {causes?.length > 0 && (
        <section>
          <div className="flex items-center gap-2 text-rose-600 font-semibold text-lg mb-2">
            <HeartPulse className="w-5 h-5" />
            Possible Causes
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {causes.map((cause, index) => (
              <li key={index}>{renderFormattedText(cause)}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Steps */}
      {steps?.length > 0 && (
        <section>
          <div className="flex items-center gap-2 text-emerald-600 font-semibold text-lg mb-2">
            <CheckCircle className="w-5 h-5" />
            Next Steps
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {steps.map((step, index) => (
              <li key={index}>{renderFormattedText(step)}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Emergency */}
      {emergency?.length > 0 && (
        <section>
          <div className="flex items-center gap-2 text-red-600 font-semibold text-lg mb-2">
            <AlertCircle className="w-5 h-5" />
            See a Doctor Immediately If
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {emergency.map((item, index) => (
              <li key={index}>{renderFormattedText(item)}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Disclaimer */}
      {disclaimer && (
        <div className="text-sm text-center text-gray-500 pt-4 border-t">
          ⚠️ {disclaimer}
        </div>
      )}
    </div>
  );
};

export default SymptomInfo;
