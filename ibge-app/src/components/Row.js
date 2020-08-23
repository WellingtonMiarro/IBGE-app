import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Row({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Text>
        {item.nome} {item.sigla}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  row: {
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 60,
    justifyContent: "center",
    paddingLeft: 10,
  },
});

export default Row;
