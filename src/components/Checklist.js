// src/components/Checklist.js
"use client";

import React, { useState } from "react";

import {
  checklistItems,
  answerOptions,
  scoreInterpretations, // Import interpretations
  disclaimerText, // Import disclaimer
  professionalHelpText, // Import help text
  googleSearchLink, // Import Google link
  googleSearchText, // Import Google link text
} from "@/data/checklistData";

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
    <div className="w-full max-w-2xl p-4 mx-auto">
      {" "}
      {/* Added mx-auto for centering */}
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
        Burns Depression Checklist
      </h2>
      <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
        Indicate how much each problem has bothered you during the past week,
        including today.
      </p>
      {/* Disclaimer Section */}
      <div className="mb-6 p-4 border border-yellow-400 bg-yellow-50 rounded shadow-sm dark:bg-yellow-900/30 dark:border-yellow-600">
        <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
          Important Disclaimer
        </h3>
        <p className="text-sm text-yellow-700 dark:text-yellow-200">
          {disclaimerText}
        </p>
      </div>
      <form className="mb-6">
        {checklistItems.map((item) => (
          <div
            key={item.id}
            className="mb-6 p-4 border rounded shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              {item.id}. {item.question}
            </p>{" "}
            {/* Increased bottom margin */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start sm:space-x-6">
              {" "}
              {/* Adjusted spacing */}
              {answerOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2 mb-2 sm:mb-0 text-gray-700 dark:text-gray-300 cursor-pointer"
                >
                  {" "}
                  {/* Added cursor-pointer */}
                  <input
                    type="radio"
                    name={`question_${item.id}`}
                    value={option.value}
                    checked={answers[item.id] === option.value}
                    onChange={(e) =>
                      handleAnswerChange(item.id, e.target.value)
                    }
                    className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-600 dark:ring-offset-gray-800 cursor-pointer" // Added cursor-pointer
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>
      <div className="text-center mb-6">
        <button
          onClick={calculateScore}
          disabled={Object.keys(answers).length !== checklistItems.length} // Disable button if not all answered
          className={`px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-900 ${
            Object.keys(answers).length !== checklistItems.length
              ? "opacity-50 cursor-not-allowed"
              : "" // Style disabled button
          }`}
        >
          Calculate Score
        </button>
        {/* Show a message prompting user to answer all questions */}
        {Object.keys(answers).length !== checklistItems.length &&
          totalScore === null && (
            <p className="text-sm text-red-600 dark:text-red-400 mt-2">
              Please answer all questions to calculate your score.
            </p>
          )}
      </div>
      {totalScore !== null &&
        calculationTimestamp && ( // Ensure timestamp is also set
          <div
            id="results-section"
            className="mt-6 p-6 border rounded shadow-sm bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              Your Results
            </h3>

            {/* Display Date and Time */}
            <p className="text-sm mb-3 text-gray-600 dark:text-gray-400">
              Calculated on: {calculationTimestamp}
            </p>

            <p className="text-lg mb-2 text-gray-800 dark:text-gray-200">
              Your total score is:{" "}
              <span className="font-bold">{totalScore}</span>
            </p>
            <p className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Interpretation:{" "}
              <span className="font-bold">{interpretation}</span>
            </p>
            <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
              {professionalHelpText}
            </p>

            {/* Action Buttons within Results */}
            <div className="flex flex-wrap gap-4 mt-4">
              {" "}
              {/* Use flex container for buttons */}
              <a
                href={googleSearchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-offset-gray-900"
              >
                {googleSearchText}
              </a>
              {/* Print Button */}
              <button
                onClick={() => window.print()} // Simple print functionality
                className="inline-block px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
              >
                Print Results
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Checklist;
