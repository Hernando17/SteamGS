import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export const Button = ({ title, style, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={{ color: "white" }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6F7BE7',
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    }
})