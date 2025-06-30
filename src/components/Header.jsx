import React, { useState } from "react";
import { Link } from "react-router-dom"; // Only if you're using react-router-dom
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Stethoscope, Menu } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            SymptoScan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/symptom-checker" className="text-gray-700 hover:text-blue-600 transition-colors">
              Symptom Checker
            </Link>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent">
              <Link to="/symptom-checker">Start Check</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            {isOpen && (
              <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-white" />
                    </div>
                    SymptoScan
                  </Link>
                </div>

                <nav className="flex flex-col gap-6">
                  <Link to="/" className="text-lg text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
                  <Link to="/symptom-checker" className="text-lg text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Symptom Checker</Link>
                  <a href="#" className="text-lg text-gray-700 hover:text-blue-600">About</a>
                  <a href="#" className="text-lg text-gray-700 hover:text-blue-600">Contact</a>

                  <div className="pt-6 border-t border-gray-200">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Link to="/symptom-checker" onClick={() => setIsOpen(false)}>Start Symptom Check</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            )}
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
