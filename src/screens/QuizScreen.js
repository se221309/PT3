import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, Animated } from "react-native";
import { styles } from "../styles/quizStyles";
import questionsPool from "../data/questions"; // Fragenpool importieren

export default function QuizScreen({ route, navigation }) {
  const { mode } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [answerChecked, setAnswerChecked] = useState(false);
  const [timer, setTimer] = useState(mode === "duel" ? 30 : null);
  const progress = useRef(new Animated.Value(1)).current;
  const timerInterval = useRef(null);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerInterval.current); // Cleanup Timer bei Neu-Laden
  }, [currentQuestionIndex]);

  const startTimer = () => {
    if (mode === "duel") {
      setTimer(30);
      progress.setValue(1);
      clearInterval(timerInterval.current); // Vorherigen Timer stoppen, falls noch aktiv

      timerInterval.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerInterval.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      Animated.timing(progress, {
        toValue: 0,
        duration: 30000,
        useNativeDriver: false,
      }).start();
    }
  };

  const stopTimer = () => {
    clearInterval(timerInterval.current);
    Animated.timing(progress, {
      toValue: progress.__getValue(), // Balken bleibt auf aktuellem Stand stehen
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  const question = questionsPool[currentQuestionIndex];

  const checkAnswer = () => {
    setAnswerChecked(true);
    stopTimer(); // Timer und Balken stoppen nach Überprüfung
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsPool.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setUserInput("");
      setAnswerChecked(false);
      startTimer(); // Timer zurücksetzen
    } else {
      navigation.navigate("Dashboard");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.question}</Text>

      {/* Timer nur im Duellmodus */}
      {mode === "duel" && (
        <View style={styles.timerContainer}>
          <Animated.View
            style={[
              styles.timerBar,
              {
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
                backgroundColor: timer > 20 ? "green" : timer > 10 ? "yellow" : "red",
              },
            ]}
          />
        </View>
      )}

      {/* Multiple Choice Fragen */}
      {question.type === "multipleChoice" &&
        question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && styles.selectedAnswer, // Antwort bleibt grau markiert
              answerChecked && option === question.correctAnswer && styles.correctAnswer, // Richtige Antwort → Grün
              answerChecked && selectedAnswer === option && selectedAnswer !== question.correctAnswer && styles.wrongAnswer, // Falsche Antwort → Rot
            ]}
            onPress={() => setSelectedAnswer(option)}
            disabled={answerChecked} // Sperrt nach Auswahl
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}

      {/* Multiple Choice Grid */}
      {question.type === "multipleChoiceGrid" && (
        <View style={styles.gridContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.gridItem,
                selectedAnswer === option && styles.selectedAnswer, // Antwort bleibt grau markiert
                answerChecked && option === question.correctAnswer && styles.correctAnswer, // Richtige Antwort → Grün
                answerChecked && selectedAnswer === option && selectedAnswer !== question.correctAnswer && styles.wrongAnswer, // Falsche Antwort → Rot
              ]}
              onPress={() => setSelectedAnswer(option)}
              disabled={answerChecked} // Sperrt nach Auswahl
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Textinput Fragen */}
      {question.type === "textInput" && (
        <TextInput
          style={styles.textInput}
          placeholder={question.placeholder}
          value={userInput}
          onChangeText={setUserInput}
        />
      )}

      {/* Gap Fill Fragen */}
      {question.type === "gapFill" && (
        <TextInput
          style={styles.textInput}
          placeholder="Fülle die Lücke..."
          value={userInput}
          onChangeText={setUserInput}
        />
      )}

      {/* Anzeige der richtigen Lösung bei falscher Antwort */}
      {answerChecked && selectedAnswer !== question.correctAnswer && (
        <Text style={styles.feedbackText}>Richtige Antwort: {question.correctAnswer}</Text>
      )}

      {/* Weiter-Button */}
      <TouchableOpacity style={styles.nextButton} onPress={answerChecked ? handleNextQuestion : checkAnswer}>
        <Text style={styles.nextButtonText}>{answerChecked ? "Weiter" : "Überprüfen"}</Text>
      </TouchableOpacity>
    </View>
  );
}
