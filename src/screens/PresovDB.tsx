import { Divider, ListItem } from "@ui-kitten/components";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

interface Props {}

export const PresovDB = ({}: Props): ReactElement => {
  const [data, setData] = useState<
    { title: string; desc: string; gender: boolean }[]
  >([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data: d } = await axios.get(
          "https://egov.presov.sk/Default.aspx?NavigationState=935:0::plac2172:_144152_5_8",
          {}
        );
        setData(
          d.map((person) => ({
            title: person.Priezvisko,
            desc: person.Počet,
            gender: person.Pohlavie === "muž" ? true : false,
          }))
        );
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            style={{ backgroundColor: item.gender ? "lightblue" : "lightpink" }}
            description={item.desc}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1, padding: 16 },
});
