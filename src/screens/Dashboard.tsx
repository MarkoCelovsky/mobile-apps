import { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Dashboard = (): ReactElement => {
  return (
    <View style={styles.rootContainer}>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
});
