import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ReactElement } from "react";
import { Screens } from "../schema/screen-names";
import { Pesnicka } from "../screens/Pesnicka";
import {
  NestedContactsScreens,
  NestedDashboardScreens,
  NestedDvorScreens,
} from "./CustomNavigation";
import { AntDesign } from "@expo/vector-icons";
import { Rychlost } from "../screens/Rychlost";
import { Hangman } from "../screens/Hangman";
import { Contacts } from "../screens/Contacts";
import { Movies } from "../screens/Movies";
import { PresovDB } from "../screens/PresovDB";

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
        name={Screens.NestedContacts}
        component={NestedContactsScreens}
        options={{
          title: "Contacts",
          tabBarIcon: () => <AntDesign name="contacts" size={24} />,
          headerShown: false,
        }}
      />
      <Screen
        name={Screens.PresovDB}
        component={PresovDB}
        options={{
          title: "Presov",
          tabBarIcon: () => <AntDesign name="heart" size={24} />,
          headerShown: false,
        }}
      />
      <Screen
        name={Screens.Movies}
        component={Movies}
        options={{
          title: "Movies",
          tabBarIcon: () => <AntDesign name="menufold" size={24} />,
        }}
      />
      {/* <Screen
        name={Screens.Hangman}
        component={Hangman}
        options={{
          title: "Hangman",
          tabBarIcon: () => <AntDesign name="hourglass" size={24} />,
        }}
      /> */}
      {/* <Screen
        name={Screens.Pesnicka}
        component={Pesnicka}
        options={{
          title: "Pesnicka",
          tabBarIcon: () => <AntDesign name="sound" size={24} />,
        }}
      />
      <Screen
        name={Screens.Dvor}
        component={NestedDvorScreens}
        options={{
          title: "Dvor",
          tabBarIcon: () => <AntDesign name="antdesign" size={24} />,
        }}
      />
      <Screen
        name={Screens.Rychlost}
        component={Rychlost}
        options={{
          title: "Rychlost",
          tabBarIcon: () => <AntDesign name="dashboard" size={24} />,
        }}
      /> */}
    </Navigator>
  );
};
