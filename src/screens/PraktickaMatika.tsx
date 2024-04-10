import { Input } from "@ui-kitten/components";
import { ReactElement, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const PraktickaMatika = (): ReactElement => {
  const [text, setText] = useState("");
  return (
    <View style={styles.rootContainer}>
      <Input
        placeholder="Metrov"
        label="Metrov"
        value={text}
        keyboardType="decimal-pad"
        onChangeText={(txt) => setText(txt)}
      />
      <View>
        <Text>
          Potrebujeme: {((4 / 3) * Math.PI * (+text / 2) ** 3).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});
