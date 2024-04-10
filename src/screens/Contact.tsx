import { useRoute } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

export const Contact = (): ReactElement => {
  const { params } = useRoute();
  return (
    <View style={styles.rootContainer}>
      <Text category="h5">{params?.contact.name}</Text>
      <Text category="h6">
        {params?.contact?.phoneNumbers
          ? params?.contact?.phoneNumbers[0]?.digits
          : params?.contact?.emails[0].email}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1, padding: 16, gap: 12 },
});
