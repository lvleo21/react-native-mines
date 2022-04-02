import React from "react";
import { View, StyleSheet, Text } from "react-native"
import params from "../../utils/params";
import Mine from "../Mine";
import Flag from "../Flag";

const styles = StyleSheet.create({
    field: {
        width: params.blockSize,
        height: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: "#999",
        borderLeftColor: "#CCC",
        borderTopColor: "#CCC",
        borderRightColor: "#333",
        borderBottomColor: "#333",
    },
    opened: {
        backgroundColor: "#999",
        borderColor: "#777",
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: "red",
        borderColor: 'red'
    },
    flagged: {

    }
})


const verifyNearMines = (count) => {
    switch (true) {
        case count === 1: return '#2A28D7';
        case count === 2: return '#28520f';
        case count > 2 && count < 6: return '#F9060A';
        case count >= 6: return '#F221A9';
        default: return null;
    };
}


export default (props) => {

    const { mined, opened, nearMines, exploded, flagged } = props;

    const fieldStyle = [styles.field]

    // vai ter mais condições

    if (opened) {
        fieldStyle.push(styles.opened)
    }

    if (exploded) {
        fieldStyle.push(styles.exploded)
    }

    if (flagged) {
        fieldStyle.push(styles.flagged)
    }

    if (!opened && !exploded) {
        fieldStyle.push(styles.regular)
    }

    let color = verifyNearMines(nearMines);

    return (
        <View style={fieldStyle}>
            {
                !mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color: color }]}> {nearMines}</Text> :
                    false
            }

            {mined && opened ? <Mine /> : false}
            {flagged && !opened ? <Flag /> : false}
        </View>
    )

}