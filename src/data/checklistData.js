// src/data/checklistData.js
export const checklistItems = [
  // Thoughts and Feelings
  { id: 1, question: "Feeling sad or down in the dumps" },
  { id: 2, question: "Feeling unhappy or blue" },
  { id: 3, question: "Crying spells or tearfulness" },
  { id: 4, question: "Feeling discouraged" },
  { id: 5, question: "Feeling hopeless" },
  { id: 6, question: "Low self-esteem" },
  { id: 7, question: "Feeling worthless or inadequate" },
  { id: 8, question: "Guilt or shame" },
  { id: 9, question: "Criticizing yourself or blaming others" },
  { id: 10, question: "Difficulty making decisions" },
  // Activities and Personal Relationships
  { id: 11, question: "Loss of interest in family, friends or colleagues" },
  { id: 12, question: "Loneliness" },
  { id: 13, question: "Spending less time with family or friends" },
  { id: 14, question: "Loss of motivation" },
  { id: 15, question: "Loss of interest in work or other activities" },
  { id: 16, question: "Avoiding work or other activities" },
  { id: 17, question: "Loss of pleasure or satisfaction in life" },
  // Physical Symptoms
  { id: 18, question: "Feeling tired" },
  { id: 19, question: "Difficulty sleeping or sleeping too much" },
  { id: 20, question: "Decreased or increased appetite" },
  { id: 21, question: "Loss of interest in sex" },
  { id: 22, question: "Worrying about your health" },
  // Suicidal Urges
  { id: 23, question: "Do you have any suicidal thoughts?" },
  { id: 24, question: "Would you like to end your life?" },
  { id: 25, question: "Do you have a plan for harming yourself?" },
];

export const answerOptions = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "Somewhat" },
  { value: 2, label: "Moderately" },
  { value: 3, label: "A lot" },
  { value: 4, label: "Extremely" },
];

export const scoreInterpretations = [
  { range: [0, 5], interpretation: "No depression" },
  { range: [6, 10], interpretation: "Normal but unhappy" }, // Adjusted based on common BDC interpretations
  { range: [11, 25], interpretation: "Mild depression" },
  { range: [26, 50], interpretation: "Moderate depression" },
  { range: [51, 75], interpretation: "Severe depression" },
  { range: [76, 100], interpretation: "Extreme depression" },
];

export const disclaimerText =
  "This checklist is intended for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or 911 immediately.";

export const professionalHelpText =
  "Consider discussing your results with a mental health professional. They can provide a formal diagnosis and discuss treatment options.";
export const googleSearchLink =
  "https://www.google.com/search?q=therapists+near+me";
export const googleSearchText = "Find therapists near you";
