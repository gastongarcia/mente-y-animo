// src/components/Checklist.js
"use client";

import React, { useState } from "react";
import { Lora } from "next/font/google";

import {
  checklistItems,
  answerOptions,
  scoreInterpretations, // Import interpretations
  disclaimerText, // Import disclaimer
  professionalHelpText, // Import help text
  googleSearchLink, // Import Google link
  googleSearchText, // Import Google link text
} from "@/data/checklistData";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
});

const Checklist = () => {
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(null);
  const [interpretation, setInterpretation] = useState(""); // State for interpretation text
  const [calculationTimestamp, setCalculationTimestamp] = useState(null);

  const handleAnswerChange = (questionId, value) => {
    setTotalScore(null); // Reset score and interpretation if answers change
    setInterpretation("");
    setCalculationTimestamp(null);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: parseInt(value, 10),
    }));
  };

  // Function to get interpretation based on score
  const getInterpretation = (score) => {
    for (const level of scoreInterpretations) {
      if (score >= level.range[0] && score <= level.range[1]) {
        return level.interpretation;
      }
    }
    return "Score out of range"; // Fallback
  };

  const calculateScore = () => {
    // ... (check for all answers remains the same)

    let score = 0;
    for (const questionId in answers) {
      score += answers[questionId];
    }

    // Get and format the current date and time
    const now = new Date();
    const formattedTimestamp =
      now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      " at " +
      now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

    setTotalScore(score);
    setInterpretation(getInterpretation(score));
    setCalculationTimestamp(formattedTimestamp); // <-- Add this line
  };

  return (
    <div className="min-h-screen w-full">
      <div className="w-full sm:max-w-7xl sm:mx-auto sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="space-y-8 mb-12">
          <h2
            className={`${lora.className} text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 bg-clip-text text-transparent selection:bg-emerald-800/10`}
          >
            Mind & Mood Scanner
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl text-center leading-relaxed font-light text-gray-700">
              Take a moment for yourself.
            </p>
            <p className="mt-4 text-lg sm:text-xl text-center leading-relaxed text-gray-500">
              This quick, science-based check-in helps you understand your
              emotional wellbeing.
              <span className="block mt-2 font-light italic">
                Just answer honestly – there are no right or wrong answers.
              </span>
            </p>
          </div>
        </header>

        {/* Disclaimer Section */}
        <div className="mb-12">
          <div className="p-4 border border-gray-200 bg-gray-50/50 rounded-lg">
            <h3 className="font-medium text-gray-600 mb-2 flex items-center text-sm">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Disclaimer
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {disclaimerText}
            </p>
          </div>
        </div>

        <form className="space-y-6">
          {checklistItems.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p
                className={`${lora.className} text-xl leading-relaxed font-semibold text-violet-900 mb-6`}
              >
                {item.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-2">
                {answerOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center justify-start p-4 sm:p-3 w-full sm:w-auto rounded-lg border transition-all duration-300 cursor-pointer whitespace-nowrap
                      ${
                        answers[item.id] === option.value
                          ? "border-emerald-500 bg-emerald-50/50 text-emerald-700 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 bg-gray-50/80 text-gray-700 hover:bg-gray-100/80"
                      }`}
                  >
                    <input
                      type="radio"
                      name={`question_${item.id}`}
                      value={option.value}
                      checked={answers[item.id] === option.value}
                      onChange={(e) =>
                        handleAnswerChange(item.id, e.target.value)
                      }
                      className="form-radio h-4 w-4 shrink-0 text-emerald-600 focus:ring-emerald-500 border-gray-300 cursor-pointer"
                    />
                    <span className="ml-2 text-sm font-medium truncate">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </form>

        <div className="mt-12 text-center">
          <button
            onClick={calculateScore}
            disabled={Object.keys(answers).length !== checklistItems.length}
            className={`w-full sm:w-auto px-8 py-4 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-xl shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 ${
              Object.keys(answers).length !== checklistItems.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:translate-y-[-2px]"
            }`}
          >
            Get Your Results
          </button>
          {Object.keys(answers).length !== checklistItems.length &&
            totalScore === null && (
              <p className="text-sm text-red-600 animate-pulse mt-4">
                Please answer all questions to see your results
              </p>
            )}
        </div>

        {totalScore !== null && calculationTimestamp && (
          <div className="mt-16">
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-lg space-y-8">
              <div className="space-y-2">
                <h3
                  className={`${lora.className} text-2xl font-bold text-gray-900`}
                >
                  Your Results
                </h3>
                <p className="text-sm text-gray-500">
                  Calculated on: {calculationTimestamp}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                  <p className="text-lg text-gray-800">
                    Your total score is{" "}
                    <span className="font-bold text-emerald-700">
                      {totalScore}
                    </span>
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                  <p className="text-lg text-gray-800">
                    <span className="font-medium">Interpretation: </span>
                    <span className="text-emerald-700">{interpretation}</span>
                  </p>
                </div>

                <div className="sm:col-span-2 p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {professionalHelpText}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-8 pt-4">
                <a
                  href={googleSearchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 py-6 sm:py-4 min-w-[200px] bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-xl hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  {googleSearchText}
                </a>
                <button
                  onClick={() => window.print()}
                  className="inline-flex justify-center items-center px-6 py-6 sm:py-4 min-w-[200px] bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <svg
                    className="w-5 h-5 mr-2 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  Save Results
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checklist;
