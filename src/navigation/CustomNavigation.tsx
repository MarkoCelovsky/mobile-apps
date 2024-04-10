import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../schema/screen-names";
import { Dashboard } from "../screens/Dashboard";
import { Dvor, Zvieratko } from "../screens/Dvor";
import { Contacts } from "../screens/Contacts";
import { Contact } from "../screens/Contact";

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

export const NestedDvorScreens = () => {
  return (
    <Navigator
      initialRouteName={Screens.Dvor}
      screenOptions={{
        headerBackTitleVisible: false,
        animation: "slide_from_right",
        gestureEnabled: true,
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Screen
        name={Screens.Dvor}
        component={Dvor}
        options={{ headerShown: false }}
      />
      <Screen name={Screens.Zviera} component={Zvieratko} />
    </Navigator>
  );
};
export const NestedContactsScreens = () => {
  return (
    <Navigator
      initialRouteName={Screens.Contacts}
      screenOptions={{
        headerBackTitleVisible: false,
        animation: "slide_from_right",
        gestureEnabled: true,
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Screen name={Screens.Contacts} component={Contacts} />
      <Screen name={Screens.Contact} component={Contact} />
    </Navigator>
  );
};
