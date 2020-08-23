import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Axios from "axios";

import Row from "../components/Row";

function CidadeScreen({ navigation, route }) {
  const { estado } = route.params;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.id}/municipios`;

  const [cidade, setCidade] = useState([]);

  useEffect(() => {
    getCidade();
  }, []);

  const getCidade = async () => {
    try {
      const response = await Axios.get(url);
      const { data } = response;
      setCidade(data);
    } catch (error) {
      alert(error.menssage);
    }
  };
  return (
    <FlatList data={cidade} renderItem={({ item }) => <Row item={item} />} />
  );
}

export default CidadeScreen;
