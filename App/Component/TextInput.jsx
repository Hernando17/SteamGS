import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export const Input = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} />
    );
}

export const InputSecure = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={true} />
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#6F7BE7",
        padding: 7,
        marginBottom: 7,
        justifyContent: "center",
    },
})