import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Input, InputSecure } from "../Component/TextInput";
import { Button } from "../Component/Button";
import { RegisterAct } from '../Service/Auth/Auth';

const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Register = async () => {
        try {
            await RegisterAct({ email, password });
            Alert.alert("Registration successfully");
            navigation.navigate("LoginScreen");
        } catch (error) {
            console.log(error);
            Alert.alert("Registration failed ", error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.page}>Register</Text>
            <Text style={styles.title}>Email</Text>
            <Input placeholder="Input new email" value={email} onChangeText={setEmail} />
            <Text style={styles.title}>Password</Text>
            <InputSecure placeholder="Input new password" value={password} onChangeText={setPassword} />
            <Button style={styles.registerbutton} title="Confirm" onPress={Register} />
            <View>
                <Text style={styles.register}>Already have account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={{ alignSelf: "center", color: "#6F7BE7" }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 50,
    },
    title: {
        alignSelf: "flex-start",
        marginBottom: 5,
    },
    registerbutton: {
        width: "30%",
        alignSelf: "flex-end",
    },
    register: {
        paddingTop: 100,
        alignSelf: "center",
    },
    page: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 50,
        justifyContent: "center",
        alignSelf: "center",
    }
})