import { ReactElement, useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { Audio } from "expo-av";

export const Pesnicka = (): ReactElement => {
  const [audio, setAudio] = useState<Audio.Sound>();

  useEffect(() => {
    const getSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/powerful_trap.mp3")
        );
        setAudio(sound);

        audio && audio.playAsync();
      } catch (err) {
        console.error(err);
      }
    };
    getSound();
  }, []);

  useEffect(() => {
    return audio
      ? () => {
          audio.unloadAsync();
        }
      : undefined;
  }, [audio]);

  const playSound = async () => {
    audio && (await audio.playAsync());
  };

  const stopSound = async () => {
    audio && (await audio.stopAsync());
  };

  const pauseSound = async () => {
    audio && (await audio.pauseAsync());
  };

  return (
    <View style={styles.rootContainer}>
      <Text className="text-2xl mb-6">Pesnicka</Text>
      <View className="px-5 flex-1 justify-center">
        <TouchableOpacity onPress={playSound}>
          <Image
            source={require("../../assets/yazda-dark.png")}
            style={styles.image}
            borderRadius={10}
          />
        </TouchableOpacity>
        <View className="mt-4">
          <Button onPress={pauseSound} title="Pause" />
        </View>
        <View className="mt-4">
          <Button onPress={stopSound} title="Stop" color="red" />
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, padding: 16 },
  image: {
    height: windowWidth > windowHeight ? "50%" : 300,
    width: "100%",
  },
});
