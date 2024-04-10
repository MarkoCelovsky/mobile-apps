import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabNavigation } from "./src/navigation/BottomTabNavigation";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import * as eva from "@eva-design/eva";

export default function App() {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <GestureHandlerRootView style={styles.rootContainer}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <StatusBar style="dark" />
              <BottomTabNavigation />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ApplicationProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
});
