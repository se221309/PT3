import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

const sampleQuestions = [
  {
    id: 1,
    category: "Elektrotechnik",
    question: "Welche Schaltung ist zu sehen?",
    options: ["Wendeschütz-Schaltung", "Einfachschütz-Schaltung", "Oder-Schaltung", "Und-Schaltung"],
    correctAnswer: "Oder-Schaltung",
  },
  {
    id: 2,
    category: "Elektrotechnik",
    question: "Was ist Teil einer Blitzschutzanlage?",
    options: ["Oberer Blitzschutz", "Äußerer Blitzschutz", "Innerer Blitzschutz", "Unterer Blitzschutz"],
    correctAnswer: "Äußerer Blitzschutz",
  },
];

const QuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === sampleQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      navigation.navigate("Dashboard");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{sampleQuestions[currentQuestionIndex].category}</Text>

      <Text style={globalStyles.cardText}>{sampleQuestions[currentQuestionIndex].question}</Text>

      {sampleQuestions[currentQuestionIndex].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            globalStyles.button,
            selectedAnswer === option
              ? option === sampleQuestions[currentQuestionIndex].correctAnswer
                ? { backgroundColor: "green" }
                : { backgroundColor: "red" }
              : {},
          ]}
          onPress={() => handleAnswer(option)}
          disabled={selectedAnswer !== null}
        >
          <Text style={globalStyles.buttonText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {selectedAnswer && (
        <TouchableOpacity style={globalStyles.button} onPress={handleNextQuestion}>
          <Text style={globalStyles.buttonText}>Weiter</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default QuizScreen;
