import React from "react";
import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom"; // optional: use only if you're using routing

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              SymptoScan
            </Link>
            <p className="text-gray-400 text-sm">
              Your trusted AI-powered health companion for symptom checking and health insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/symptom-checker" className="block text-gray-400 hover:text-white transition-colors">
                Symptom Checker
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Medical Disclaimer
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@symptoscan.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1-800-SYMPTO</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 SymptoScan. All rights reserved.</p>
            <p className="text-gray-500 text-xs">
              This tool is for informational purposes only and should not replace professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
