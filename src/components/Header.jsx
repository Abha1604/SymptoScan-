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
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            SymptoScan
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
              <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About Us
              </a>
            </nav>

            <Button variant="outline" className="bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold shadow-sm px-4 py-2 rounded-md transition hidden md:inline-flex">
              <Link to="/symptom-checker">Start Check</Link>
            </Button>

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
