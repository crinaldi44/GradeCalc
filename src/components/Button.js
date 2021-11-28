import React from "react";
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";

/**
 * A Button is a combination of a TouchableOpacity, a Text label, and a
 * view.
 * @param props [label, color, onTap]
 * @constructor
 */
const Button = (props) => {
    return(
        <TouchableOpacity
            style={{
                borderRadius: 30,
                backgroundColor: props.color,
                maxWidth: 200,
                width: 200,
                alignItems: 'center'
            }}
            onPress={props.onTap}>
            <Text style={styles.buttonLabel}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}

/**
 * Represents the StyleSheet for this component.
 * @type {{buttonBackground: {borderRadius: number}, buttonLabel: {}}}
 */
const styles = StyleSheet.create(
    {
        buttonLabel: {
            padding: 15,
            fontSize: 17,
            fontWeight: 'bold',
            color: '#ffffff',
            letterSpacing: 1.2
        }
    }
)

export default Button