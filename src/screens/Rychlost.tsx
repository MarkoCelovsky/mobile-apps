import { Input, Text } from "@ui-kitten/components";
import { ReactElement, useState } from "react";
import { StyleSheet, View } from "react-native";

export const Rychlost = (): ReactElement => {
  const [speed, setSpeed] = useState(0);
  return (
    <View style={styles.rootContainer}>
      <View className="flex-1 items-center">
        <Input
          value={speed.toString()}
          label="Rychlost"
          keyboardType="number-pad"
          onChangeText={(text) => setSpeed(+text)}
        />
        <Text category="h5">{((speed * 3600) / 1000).toFixed(1)} km/h</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1, padding: 16 },
});
