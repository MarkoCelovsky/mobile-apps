import { ReactElement, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import * as ContactsLib from "expo-contacts";
import { Divider, ListItem, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../schema/screen-names";

export const Contacts = (): ReactElement => {
  const [contacts, setContacts] = useState<ContactsLib.Contact[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await ContactsLib.requestPermissionsAsync();
      if (status === ContactsLib.PermissionStatus.GRANTED) {
        const { data } = await ContactsLib.getContactsAsync();
        setContacts(data);
      }
    })();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={contacts}
        ItemSeparatorComponent={Divider}
        renderItem={({ item }) => (
          <ListItem
            style={{
              marginHorizontal: 12,
              marginTop: 2,
              gap: 6,
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            onPress={() => navigate(Screens.Contact, { contact: item })}
          >
            <Text category="h6">{item.name}</Text>
            <Text category="s1">
              {item.phoneNumbers
                ? item.phoneNumbers[0] && item.phoneNumbers[0].digits
                : item?.emails[0]?.email}
            </Text>
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
});
