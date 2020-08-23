import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Axios from "axios";

import Row from "../components/Row";

function HomeScreen({ navigation }) {
  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

  const [data, setData] = useState([]);

  const city = (item) => {
    navigation.navigate("Cidade", { estado: item });
  };
  useEffect(() => {
    getStates();
  }, []);

  const getStates = async () => {
    try {
      const response = await Axios.get(url);
      const { data } = response;
      setData(data);
    } catch (error) {
      alert(error.menssage);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Row item={item} onPress={() => city(item)} />
        )}
      ></FlatList>
    </View>
  );
}

export default HomeScreen;
