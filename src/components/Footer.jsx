import React from "react";
import { Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 transition-colors">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white dark:text-blue-600">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              SymptoScan
            </Link>
            <p className="text-gray-400 dark:text-gray-600 text-sm">
              Your trusted AI-powered health companion for symptom checking and health insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:text-right">
            <h3 className="font-semibold text-lg text-white dark:text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/symptom-checker" className="block text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-blue-600 transition-colors">
                Symptom Checker
              </Link>
              <a href="#" className="block text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-blue-600 transition-colors">
                About Us
              </a>
              {/* <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 dark:text-gray-600 text-sm">© 2024 SymptoScan. All rights reserved.</p>
            <p className="text-gray-500 dark:text-gray-500 text-xs text-center md:text-right">
              This tool is for informational purposes only and should not replace professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
