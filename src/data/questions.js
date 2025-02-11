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
      id: 5,
      category: "Elektrotechnik",
      type: "imageQuestion",
      image: "schaltung.png", // Platzhalter für Bild-URL
      question: "Welche Schaltung ist zu sehen?",
      options: ["Wendeschütz-Schaltung", "Einfachschütz-Schaltung", "Oder-Schaltung", "Und-Schaltung"],
      correctAnswer: "Oder-Schaltung",
    },
  ];
  
  export default questionsPool;
  