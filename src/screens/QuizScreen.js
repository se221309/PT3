import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, Animated, Image } from "react-native";
import { styles } from "../styles/quizStyles";
import questionsPool from "../data/questions"; // Fragenpool importieren

export default function QuizScreen({ route, navigation }) {
  const { mode } = route.params;
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [answerChecked, setAnswerChecked] = useState(false);
  const [timer, setTimer] = useState(mode === "duel" ? 30 : null);
  const progress = useRef(new Animated.Value(1)).current;
  const timerInterval = useRef(null);

  // Funktion zum zufälligen Mischen eines Arrays (Fisher-Yates Shuffle)
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    // Wähle 5 zufällige Fragen aus
    const shuffledQuestions = shuffleArray([...questionsPool]).slice(0, 5);
    setSelectedQuestions(shuffledQuestions);
    startTimer();
    return () => clearInterval(timerInterval.current); // Cleanup Timer bei Neu-Laden
  }, []);

  useEffect(() => {
    if (selectedQuestions.length > 0) {
      startTimer();
    }
  }, [currentQuestionIndex]);

  const startTimer = () => {
    if (mode === "duel" && selectedQuestions.length > 0) {
      setTimer(30);
      progress.setValue(1);
      clearInterval(timerInterval.current);

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
      toValue: progress.__getValue(),
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  if (selectedQuestions.length === 0) return null; // Ladebildschirm oder Fallback, falls Fragen noch nicht geladen sind
  const question = selectedQuestions[currentQuestionIndex];

  const checkAnswer = () => {
    setAnswerChecked(true);
    stopTimer();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setUserInput("");
      setAnswerChecked(false);
      startTimer();
    } else {
      navigation.navigate("Dashboard");
    }
  };

  return (
    <View style={styles.container}>
      
      {question.image && (
  <Image source={question.image} style={styles.questionImage} />
)}

      <Text style={styles.questionText}>{question.question}</Text>

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

      {question.type === "multipleChoice" &&
        question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && styles.selectedAnswer,
              answerChecked && option === question.correctAnswer && styles.correctAnswer,
              answerChecked && selectedAnswer === option && selectedAnswer !== question.correctAnswer && styles.wrongAnswer,
            ]}
            onPress={() => setSelectedAnswer(option)}
            disabled={answerChecked}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}

      {question.type === "multipleChoiceGrid" && (
        <View style={styles.gridContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.gridItem,
                selectedAnswer === option && styles.selectedAnswer,
                answerChecked && option === question.correctAnswer && styles.correctAnswer,
                answerChecked && selectedAnswer === option && selectedAnswer !== question.correctAnswer && styles.wrongAnswer,
              ]}
              onPress={() => setSelectedAnswer(option)}
              disabled={answerChecked}
            >
              <Text>{option}</Text>
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

      {answerChecked && selectedAnswer !== question.correctAnswer && (
        <Text style={styles.feedbackText}>Richtige Antwort: {question.correctAnswer}</Text>
      )}

      <TouchableOpacity style={styles.nextButton} onPress={answerChecked ? handleNextQuestion : checkAnswer}>
        <Text style={styles.nextButtonText}>{answerChecked ? "Weiter" : "Überprüfen"}</Text>
      </TouchableOpacity>
    </View>
  );
}
