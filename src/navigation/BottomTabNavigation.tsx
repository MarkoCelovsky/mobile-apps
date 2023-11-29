import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ReactElement } from "react";
import { Screens } from "../schema/screen-names";
import { Pesnicka } from "../screens/Pesnicka";
import { NestedDashboardScreens } from "./CustomNavigation";
import { AntDesign } from "@expo/vector-icons";
import { Rychlost } from "../screens/Rychlost";

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTabNavigation = (): ReactElement => {
  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
        tabBarActiveTintColor: "black",
      }}
    >
      <Screen
        name={Screens.NestedDashboard}
        component={NestedDashboardScreens}
        options={{
          title: "Dashboard",
          tabBarIcon: () => <AntDesign name="home" size={24} />,
        }}
      />
      <Screen
        name={Screens.Pesnicka}
        component={Pesnicka}
        options={{
          title: "Pesnicka",
          tabBarIcon: () => <AntDesign name="sound" size={24} />,
        }}
      />
      <Screen
        name={Screens.Rychlost}
        component={Rychlost}
        options={{
          title: "Rychlost",
          tabBarIcon: () => <AntDesign name="dashboard" size={24} />,
        }}
      />
    </Navigator>
  );
};
