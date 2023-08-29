import React from "react";
import { Text } from "react-native";

export default function MinMAx2(props) {
    const { min, max } = props;

    const maxValue = Math.max(parseInt(min), parseInt(max));

    return (
        <View style={styles.container}>
        <NumeroAleatorio min={1} max={100} />
        <NumeroAleatorio min={50} max={200} />
      </View>
    );
}