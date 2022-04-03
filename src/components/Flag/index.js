import react from "react";
import { View, StyleSheet } from "react-native";


const Flag = (props) => {

    return (
        <View style={styles.container}>
            <View style={[styles.pole,  props.bigger ? styles.poleBigger : null]}></View>
            <View style={[styles.flag,  props.bigger ? styles.flagBigger : null]}></View>
            <View style={[styles.base1, props.bigger ? styles.baseBigger1 : null]}></View>
            <View style={[styles.base2, props.bigger ? styles.baseBigger2 : null]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    pole: {
        position: "absolute",
        height: 10,
        width: 2,
        backgroundColor: "#222",
        marginLeft: 9,
    },
    flag: {
        position: "absolute",
        height: 5,
        width: 5,
        backgroundColor: "#F22",
        marginLeft: 3,

    },
    base1: {
        position: "absolute",
        height: 2,
        width: 6,
        backgroundColor: "#222",
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: "absolute",
        height: 2,
        width: 10,
        backgroundColor: "#222",
        marginLeft: 5,
        marginTop: 12
    },
    poleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3
    },
    baseBigger1: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12
    },
    baseBigger2: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24
    },
})

export default Flag;