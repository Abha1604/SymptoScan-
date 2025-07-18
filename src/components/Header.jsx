import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Stethoscope, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

function Header() {
  const { isDark, setIsDark } = useDarkMode();

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900/90 backdrop-blur-sm border-b border-blue-100 dark:border-gray-700 z-50 transition">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SymptoScan Logo"
              className="h-10 w-auto"
              title="SymptoScan"
              />
          </Link>


          {/* Navigation + Actions */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/symptom-checker" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Symptom Checker
              </Link>
              <a href="/nearby-hospital" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Nearby Hospitals
              </a>
            </nav>

           

            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition"
              title="Toggle Dark Mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
