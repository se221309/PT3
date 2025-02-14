import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { questionStyles as styles } from "../styles/questionStyles";
import questionsPool from "../data/questions"; // Import der bestehenden Fragen

export default function QuestionsManagementScreen({ navigation }) {
  const [questionText, setQuestionText] = useState("");
  const [category, setCategory] = useState("Elektrotechnik");
  const [type, setType] = useState("multipleChoice");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allQuestions, setAllQuestions] = useState([...questionsPool]);

  const handleAddQuestion = () => {
    if (!questionText.trim()) {
      Alert.alert("Fehler", "Die Frage darf nicht leer sein!");
      return;
    }

    if (type === "multipleChoice" && options.some(option => option.trim() === "")) {
      Alert.alert("Fehler", "Alle Antwortoptionen müssen ausgefüllt sein.");
      return;
    }

    const newQuestion = {
      id: allQuestions.length + 1,
      category,
      type,
      question: questionText,
      options: type === "multipleChoice" ? options : undefined,
      correctAnswer,
    };

    const updatedQuestions = [...allQuestions, newQuestion];
    setAllQuestions(updatedQuestions);

    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");

    Alert.alert("Erfolg", "Die Frage wurde erfolgreich hinzugefügt!");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Frage hinzufügen</Text>

        {/* Kategorie */}
        <Text style={styles.label}>Kategorie:</Text>
        <Picker selectedValue={category} onValueChange={setCategory} style={styles.picker}>
          <Picker.Item label="Elektrotechnik" value="Elektrotechnik" />
          <Picker.Item label="Material- & Werkstoffe" value="Material- & Werkstoffe" />
          <Picker.Item label="SPS" value="SPS" />
        </Picker>

        {/* Fragentext */}
        <Text style={styles.label}>Frage:</Text>
        <TextInput
          style={styles.input}
          placeholder="Frage eingeben..."
          value={questionText}
          onChangeText={setQuestionText}
        />

        {/* Fragentyp */}
        <Text style={styles.label}>Fragentyp:</Text>
        <Picker selectedValue={type} onValueChange={setType} style={styles.picker}>
          <Picker.Item label="Multiple Choice" value="multipleChoice" />
          <Picker.Item label="Text Input" value="textInput" />
          <Picker.Item label="Gap Fill" value="gapFill" />
        </Picker>

        {/* Antwortoptionen für Multiple Choice */}
        {type === "multipleChoice" && (
          <>
            <Text style={styles.label}>Antwortoptionen:</Text>
            {options.map((option, index) => (
              <TextInput
                key={index}
                style={styles.input}
                placeholder={`Antwort ${index + 1}`}
                value={option}
                onChangeText={(text) => {
                  const newOptions = [...options];
                  newOptions[index] = text;
                  setOptions(newOptions);
                }}
              />
            ))}
          </>
        )}

        {/* Richtige Antwort */}
        <Text style={styles.label}>Richtige Antwort:</Text>
        <TextInput
          style={styles.input}
          placeholder="Richtige Antwort eingeben..."
          value={correctAnswer}
          onChangeText={setCorrectAnswer}
        />

        {/* Frage hinzufügen */}
        <TouchableOpacity style={styles.button} onPress={handleAddQuestion}>
          <Text style={styles.buttonText}>Frage hinzufügen</Text>
        </TouchableOpacity>

        {/* Zurück zum Dashboard */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.buttonText}>Zurück zum Dashboard</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
