import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Layout, Card } from "@ui-kitten/components";

const wordList = ["hangman", "react", "javascript", "uikitten"];

export const Hangman = () => {
  const [word, setWord] = useState("");
  const [guessedWord, setGuessedWord] = useState("");
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6); // You can customize the number of attempts

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const newWord = wordList[randomIndex].toLowerCase();
    setWord(newWord);
    setGuessedWord("_".repeat(newWord.length));
    setIncorrectGuesses([]);
    setRemainingAttempts(6);
  };

  const handleGuess = (letter: string) => {
    if (word.includes(letter)) {
      const newGuessedWord = word
        .split("")
        .map((char, index) => (char === letter ? letter : guessedWord[index]))
        .join("");
      setGuessedWord(newGuessedWord);
    } else {
      setIncorrectGuesses([...incorrectGuesses, letter]);
      setRemainingAttempts(remainingAttempts - 1);
    }
  };

  const renderWord = () => {
    return (
      <Text style={styles.wordText}>{guessedWord.split("").join(" ")}</Text>
    );
  };

  const renderHangman = () => {
    const hangmanGraphics = [
      `
      |   
      |
      |
      |
      |
     ===
     `,
      `
      |   
      |   
      O   
      |   
      |   
     ===
     `,
      `
      |   
      |   
      O   
     /|   
      |   
     ===
     `,
      `
      |   
      |   
      O   
     /|\\  
      |   
     ===
     `,
      `
      |   
      |   
      O   
     /|\\  
      ||   
     ===
     `,
    ];

    return (
      <View style={styles.hangmanContainer}>
        <Text style={styles.incorrectGuessesText}>
          Incorrect Guesses: {incorrectGuesses.join(", ")}
        </Text>
        <View style={styles.hangman}>
          {hangmanGraphics.slice(0, 6 - remainingAttempts).map((part, index) =>
            index ? (
              <Text key={index} style={styles.hangmanPart}>
                {part}
              </Text>
            ) : null
          )}
        </View>
      </View>
    );
  };

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const renderAlphabetButtons = () => {
    return (
      <View style={styles.alphabetContainer}>
        {alphabet.split("").map((letter) => (
          <Button
            key={letter}
            title={letter.toUpperCase()}
            onPress={() => handleGuess(letter)}
            disabled={
              guessedWord.includes(letter) ||
              incorrectGuesses.includes(letter) ||
              !remainingAttempts
            }
          />
        ))}
      </View>
    );
  };

  return (
    <Layout style={styles.container}>
      <Card style={styles.card}>
        {renderWord()}
        {renderHangman()}
        <Text style={styles.remainingAttemptsText}>
          Remaining Attempts: {remainingAttempts}
        </Text>
        {renderAlphabetButtons()}
        <Button title="New Game" onPress={startNewGame} />
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  alphabetContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginVertical: 20,
    gap: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  hangmanContainer: {
    alignItems: "center",
  },
  hangman: {
    flexDirection: "row",
  },
  hangmanPart: {
    marginRight: 10,
    fontSize: 12,
  },
  card: {
    padding: 16,
    alignItems: "center",
  },
  wordText: {
    fontSize: 24,
    marginBottom: 20,
  },
  incorrectGuessesText: {
    fontSize: 18,
    marginBottom: 20,
  },
  remainingAttemptsText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
