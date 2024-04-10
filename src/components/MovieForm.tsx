import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Datepicker, Input, Text } from "@ui-kitten/components";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Movie } from "../screens/Movies";

interface Props {
  movie: Movie | null;
  onSave: (movie: Movie, newOne: boolean) => void;
}

const MovieForm = ({ movie, onSave }: Props) => {
  const [name, setName] = useState(movie?.name);
  const [category, setCategory] = useState(movie?.category);
  const [yearPublished, setYearPublished] = useState(
    movie?.yearPublished ? new Date(movie?.yearPublished) : new Date()
  );

  const handleSave = () => {
    if (!name || !category || !yearPublished) {
      return;
    }
    const updatedMovie: Movie = movie
      ? {
          ...movie,
          name: name,
          category: category,
          yearPublished: yearPublished.toDateString(),
        }
      : {
          id: Math.random(),
          name,
          category,
          yearPublished: yearPublished.toDateString(),
          length: 90,
        };
    updatedMovie && onSave(updatedMovie, movie ? false : true);
  };

  return (
    <BottomSheetView style={styles.bottomSheet}>
      <Text category="h4">{movie ? "Edit Movie" : "New Movie"}</Text>
      <Input
        label="Name"
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Input
        label="Category"
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <Datepicker
        label={"Pick date"}
        placeholder={"Pick date"}
        style={styles.input}
        date={yearPublished}
        onSelect={setYearPublished}
        min={new Date(0)}
        max={new Date(new Date().getTime() + 31556952000)}
      />

      <Button size="large" onPress={handleSave}>
        {movie ? "Save" : "Add new"}
      </Button>
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    padding: 16,
    paddingBottom: 32,
  },
  input: {
    marginVertical: 8,
  },
});

export default MovieForm;
