// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/pages/HomeScreen";
import CidadeScreen from "./src/pages/CidadeScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "Estados do Brasil" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Cidade"
          options={({ route }) => ({ title: route.params.estado.nome })}
          component={CidadeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
