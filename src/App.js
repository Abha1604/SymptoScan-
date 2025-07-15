import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowRight } from "lucide-react";
import { useDarkMode } from "./context/DarkModeContext";

function App() {
  const { isDark } = useDarkMode();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 transition-colors">

      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  {/* Stethoscope icon replaced with emoji for now */}
                  🩺 AI-Powered Health Assistant
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold font-arial text-gray-900 dark:text-white leading-tight">
                 Your Personal
                  <span className="text-blue-800 dark:text-blue-400 block">Symptom Checker</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Get instant, reliable health insights powered by advanced AI. Understand your symptoms and make
                  informed decisions about your health.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/symptom-checker">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md flex items-center gap-2 group transition">
                    Start Symptom Check
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
                
              </div>

              <div className="flex items-center gap-6 pt-4 text-gray-600">
                <span>🆓 Free to use</span>
                <span>🤖 AI Powered</span>
                <span>🔐 Privacy first</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-blue-100 dark:border-gray-600 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">❤️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Quick Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Get results in under 3 minutes</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Describe your symptoms</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Answer guided questions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-700 font-medium">Get personalized insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose SymptoScan?
          </h2>

          {/* Add margin below heading */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 mb-12">
            Advanced AI technology uses public health data to provide helpful health insights.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "AI-Powered Analysis",
                desc: "Our advanced AI analyzes your symptoms using the latest medical knowledge.",
              },
              {
                icon: "🛡️",
                title: "Educational Purpose",
                desc: "This tool offer basic health suggestions and is not a substitute for professional medical advice.",
              },
              {
                icon: "⏱️",
                title: "Instant Results",
                desc: "Get immediate insights and recommendations without waiting for appointments.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="border border-blue-100 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-blue-600 dark:bg-gray-800 text-white">
        <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold">500K+</div>
            <div className="text-blue-100 dark:text-gray-400">Symptoms Analyzed</div>
          </div>
          <div>
            <div className="text-4xl font-bold">95%</div>
            <div className="text-blue-100 dark:text-gray-400">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold">24/7</div>
            <div className="text-blue-100 dark:text-gray-400">Available</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-center">
        <div className="container mx-auto max-w-4xl px-4 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Ready to Check Your Symptoms?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            Take the first step towards better health with our AI-powered symptom checker.
          </p>

          {/* Button centered */}
          <div className="flex justify-center">
            <Link to="/symptom-checker">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-md text-lg font-semibold shadow-md transition flex items-center gap-2 group">
                Start Your Health Assessment
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          <p className="text-sm text-gray-500 pt-4">
            * This tool is for informational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900 text-center" id="about">
        <div className="container mx-auto max-w-5xl px-4 space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">About SymptoScan</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            SymptoScan is your trusted AI-powered health companion. It helps users quickly understand their symptoms through guided, medically-reviewed assessments.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Built with AI</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Our algorithms use advanced models trained on verified medical datasets.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Privacy-Centered</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We don’t collect or store user data. All assessments are processed privately.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Instant & Accessible</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Get reliable health suggestions in less than 3 minutes — anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
