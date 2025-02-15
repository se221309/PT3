const questionsPool = [
  
  {
    id: 1,
    category: "Elektrotechnik",
    type: "multipleChoice",
    question: "Welche Schaltung ist zu sehen?",
    options: ["Wendeschütz-Schaltung", "Einfachschütz-Schaltung", "Oder-Schaltung", "Und-Schaltung"],
    correctAnswer: "Oder-Schaltung",
  },
  {
    id: 2,
    category: "Elektrotechnik",
    type: "multipleChoiceGrid",
    question: "Welche elektrische Kupfer Legierung gibt es nicht?",
    options: ["Bronze", "Beryllium", "Messing", "Aluminium-bronze"],
    correctAnswer: "Beryllium",
  },
  {
    id: 3,
    category: "Elektrotechnik",
    type: "textInput",
    question: "Wie groß ist die anzunehmende elektrische Leitfähigkeit von Kupfer?",
    correctAnswer: "58 m/Ωmm²",
    placeholder: "Antwort...",
  },
  {
    id: 4,
    category: "Elektrotechnik",
    type: "gapFill",
    question: "Als Grenzwert für die Spannung gilt __ V für Wechselstrom und __ V für Gleichstrom.",
    correctAnswers: ["50", "120"],
  },

  {
    id: 6,
    category: "Elektrotechnik",
    type: "multipleChoice",
    question: "Wie viele Schutzklassen gibt es?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3",
  },
  {
    id: 7,
    category: "Elektrotechnik",
    type: "multipleChoice",
    question: "Welche Schutzklasse hat ein Gerät mit einem Schutzleiter?",
    options: ["Schutzklasse I", "Schutzklasse II", "Schutzklasse III", "Keine Schutzklasse"],
    correctAnswer: "Schutzklasse I",
  },
  {
    id: 8,
    category: "Material- und Werkstoffkunde",
    type: "textInput",
    question: "Wie groß ist der spezifische Widerstand von Aluminium?",
    correctAnswer: "0,0278 Ωmm²/m",
    placeholder: "Antwort...",
  },
  {
    id: 9,
    category: "Material- und Werkstoffkunde",
    type: "gapFill",
    question: "Die elektrische Leitfähigkeit von Kupfer beträgt __ m/Ωmm², während Aluminium __ m/Ωmm² erreicht.",
    correctAnswers: ["58", "35.4"],
  },
  {
    id: 10,
    category: "SPS-Programmierung",
    type: "multipleChoice",
    question: "Wofür steht die Abkürzung SPS?",
    options: ["Speicherprogrammierte Steuerung", "Signalprozess System", "Steuerprozessor Schaltung", "System Protokoll Steuerung"],
    correctAnswer: "Speicherprogrammierte Steuerung",
  },
  {
    id: 11,
    category: "SPS-Programmierung",
    type: "multipleChoiceGrid",
    question: "Welche Begriffe gehören zur Regelungstechnik?",
    options: ["Störgröße", "Steuergröße", "Rückführung", "Open-Loop Control"],
    correctAnswer: ["Störgröße", "Steuergröße", "Rückführung"],
  },
];

export default questionsPool;
