import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabNavigation } from "./src/navigation/BottomTabNavigation";
import * as eva from "@eva-design/eva";

export default function App() {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <StatusBar style="dark" />
          <BottomTabNavigation />
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
});
