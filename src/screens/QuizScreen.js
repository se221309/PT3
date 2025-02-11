import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../styles/quizStyles";
import questionsPool from "../data/questions"; // Import der Fragen

export default function QuizScreen({ route, navigation }) {
  const { mode } = route.params; // Unterscheidung Einzelspiel / Duell
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(mode === "duel" ? 30 : null); // Timer nur für Duell

  // Timer für Duellmodus
  useEffect(() => {
    if (mode === "duel") {
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [mode]);

  const question = questionsPool[currentQuestionIndex];

  // Prüfen, ob die Antwort korrekt ist
  const checkAnswer = () => {
    if (question.type === "multipleChoice" || question.type === "multipleChoiceGrid") {
      return selectedAnswer === question.correctAnswer;
    } else if (question.type === "textInput") {
      return userInput.trim().toLowerCase() === question.correctAnswer.toLowerCase();
    } else if (question.type === "gapFill") {
      return question.correctAnswers.every((answer, index) => userInput.split(" ")[index] === answer);
    }
    return false;
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsPool.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setUserInput("");
      if (mode === "duel") setTimer(30); // Reset Timer im Duellmodus
    } else {
      navigation.navigate("Dashboard");
    }
  };

  return (
    <View style={styles.container}>
      {/* Timer nur im Duellmodus anzeigen */}
      {mode === "duel" && (
        <Text style={styles.timer}>{`⏳ ${timer}s`}</Text>
      )}

      <Text style={styles.questionText}>{question.question}</Text>

      {/* Unterschiedliche Fragetypen */}
      {question.type === "multipleChoice" && (
        question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && styles.selectedOption,
            ]}
            onPress={() => setSelectedAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))
      )}

      {question.type === "multipleChoiceGrid" && (
        <View style={styles.gridContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.gridItem,
                selectedAnswer === option && styles.selectedOption,
              ]}
              onPress={() => setSelectedAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {question.type === "textInput" && (
        <TextInput
          style={styles.textInput}
          placeholder={question.placeholder}
          value={userInput}
          onChangeText={setUserInput}
        />
      )}

      {question.type === "gapFill" && (
        <TextInput
          style={styles.textInput}
          placeholder="Fülle die Lücke..."
          value={userInput}
          onChangeText={setUserInput}
        />
      )}

      {/* Weiter-Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
        <Text style={styles.nextButtonText}>Weiter</Text>
      </TouchableOpacity>
    </View>
  );
}
