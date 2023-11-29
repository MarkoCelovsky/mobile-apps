import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../schema/screen-names";
import { Dashboard } from "../screens/Dashboard";

const { Navigator, Screen } = createNativeStackNavigator();

export const NestedDashboardScreens = () => {
  return (
    <Navigator
      initialRouteName={Screens.Dashboard}
      screenOptions={{
        headerBackTitleVisible: false,
        animation: "slide_from_right",
        gestureEnabled: true,
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Screen
        name={Screens.Dashboard}
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
