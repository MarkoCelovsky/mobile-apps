import {
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import { Card, Divider, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import MovieForm from "../components/MovieForm";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Movie {
  name: string;
  id: number;
  yearPublished: string;
  category: string;
  length: number;
}

const headerRightComponent = (onPress: () => void) => (
  <Pressable
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
      paddingLeft: 25,
      marginRight: 12,
    })}
    accessibilityRole="button"
    onPress={onPress}
  >
    <Feather name="plus-circle" size={28} color="black" />
  </Pressable>
);

export const Movies = (): ReactElement => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selected, setSelected] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { setOptions } = useNavigation();

  const getMovies = useCallback(async () => {
    const fetchedM = await AsyncStorage.getItem("movies");
    fetchedM && setMovies(JSON.parse(fetchedM));
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const openModalHandler = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelected(null);
    bottomSheetModalRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => headerRightComponent(openModalHandler),
    });
  }, [setOptions]);

  const saveMovie = async (movie: Movie, newOne: boolean) => {
    try {
      const localMovies = newOne
        ? [...movies, movie]
        : [...movies].map((m) => (m.id === movie.id ? movie : m));
      setMovies(localMovies);
      await AsyncStorage.setItem("movies", JSON.stringify(localMovies));
      await getMovies();
      handleCloseModal();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMovie = async (movie: Movie) => {
    try {
      const localMovies = movies.filter((m) => m.id !== movie.id);
      setMovies(localMovies);
      await AsyncStorage.setItem("movies", JSON.stringify(localMovies));
      await getMovies();
      handleCloseModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={movies}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={getMovies} />
        }
        ItemSeparatorComponent={Divider}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() => {
              setSelected(item);
              openModalHandler();
            }}
            onLongPress={() => deleteMovie(item)}
          >
            <Text category="h2">{item.name}</Text>
            <Text category="h6">Category: {item.category}</Text>
            <Text category="s1">Year Published: {item.yearPublished}</Text>
          </Card>
        )}
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={["90%"]}
        enableDynamicSizing
        onDismiss={handleCloseModal}
        backdropComponent={renderBackdrop}
      >
        <MovieForm movie={selected} onSave={saveMovie} />
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
  card: {
    marginTop: 12,
    gap: 10,
    marginHorizontal: 12,
    elevation: 3, // for Android
    shadowColor: "#000", // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.25, // for iOS
    shadowRadius: 3.84, // for iOS
  },
});
