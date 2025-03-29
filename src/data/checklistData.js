// src/data/checklistData.js
export const checklistItems = [
  // Pensamientos y Sentimientos
  { id: 1, question: "Me siento triste o bajoneado" },
  { id: 2, question: "Me siento infeliz o melancólico" },
  { id: 3, question: "Tengo ganas de llorar o episodios de llanto" },
  { id: 4, question: "Me siento desalentado/a" },
  { id: 5, question: "Me siento sin esperanza" },
  { id: 6, question: "Con baja autoestima" },
  { id: 7, question: "Me siento sin valor o inadecuado/a" },
  { id: 8, question: "Siento culpa o vergüenza" },
  { id: 9, question: "Me critico a mí mismo/a o culpo a otros" },
  { id: 10, question: "Tengo dificultad para tomar decisiones" },
  // Actividades y Relaciones Personales
  { id: 11, question: "He perdido interés en familia, amigos o colegas" },
  { id: 12, question: "Soledad" },
  { id: 13, question: "Paso menos tiempo con familia o amigos" },
  { id: 14, question: "Pérdida de motivación" },
  { id: 15, question: "He perdido interés en el trabajo u otras actividades" },
  { id: 16, question: "Evito el trabajo u otras actividades" },
  { id: 17, question: "He perdido el placer o satisfacción en la vida" },
  // Síntomas Físicos
  { id: 18, question: "Siento cansancio" },
  { id: 19, question: "Tengo dificultad para dormir o duermo demasiado" },
  { id: 20, question: "Mi apetito ha disminuido o aumentado" },
  { id: 21, question: "He perdido interés en el sexo" },
  { id: 22, question: "Preocupación por mi salud" },
  // Pensamientos Suicidas
  { id: 23, question: "¿Tienes pensamientos suicidas?" },
  { id: 24, question: "¿Te gustaría terminar con tu vida?" },
  { id: 25, question: "¿Tienes algún plan para hacerte daño?" },
];

export const answerOptions = [
  { value: 0, label: "Para nada" },
  { value: 1, label: "Un poco" },
  { value: 2, label: "Moderadamente" },
  { value: 3, label: "Bastante" },
  { value: 4, label: "Extremadamente" },
];

export const scoreInterpretations = [
  { range: [0, 5], interpretation: "Sin depresión" },
  { range: [6, 10], interpretation: "Normal pero infeliz" },
  { range: [11, 25], interpretation: "Depresión leve" },
  { range: [26, 50], interpretation: "Depresión moderada" },
  { range: [51, 75], interpretation: "Depresión severa" },
  { range: [76, 100], interpretation: "Depresión extrema" },
];

export const disclaimerText =
  "Este cuestionario es solo para fines informativos y no sustituye el consejo, diagnóstico o tratamiento médico profesional. Siempre consulte a su médico u otro proveedor de salud calificado con cualquier pregunta que pueda tener sobre una condición médica. Nunca ignore el consejo médico profesional ni se demore en buscarlo debido a algo que haya leído en este sitio web. Si cree que puede tener una emergencia médica, llame a su médico o al 911 inmediatamente.";

export const professionalHelpText =
  "Considere discutir sus resultados con un profesional de salud mental. Pueden proporcionar un diagnóstico formal y discutir opciones de tratamiento.";

export const googleSearchLink =
  "https://www.google.com/search?q=psicólogos+cerca+de+mí";

export const googleSearchText = "Encuentra psicólogos cerca de ti";
