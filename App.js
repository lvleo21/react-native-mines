import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/utils/params';
import MineField from './src/components/MineField';
import { createMinedBoard } from "./src/utils/functions"

export default function App() {

  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel)
  }


  const [board, setBoard] = useState(createMinedBoard(
    params.getColumnsAmount(),
    params.getRowsAmount(),
    minesAmount()
  ))

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.welcome}>
        Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>

      <View style={styles.board}>
        <MineField board={board}/>
      </View>

      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA"
  }
});
