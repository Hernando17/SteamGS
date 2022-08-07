import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { Input, InputSecure } from "../Component/TextInput";
import { Button } from "../Component/Button";
import { LoginAct } from "../Service/Auth/Auth";
import { setIsLogin } from "../Service/Auth/AuthSlice";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const Login = async () => {
    try {
      await LoginAct({ email, password });
    } catch (error) {
      console.log(error);
      Alert.alert("Login failed", error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Image style={{ width: 100, height: 100, marginTop: -100, alignSelf: "center" }} source={require('../Asset/LogoSteamGS.png')} />
      <Text style={styles.page}>Login</Text>
      <Text style={styles.title}>Email</Text>
      <Input placeholder="Input your email" value={email} onChangeText={setEmail} />
      <Text style={styles.title}>Password</Text>
      <InputSecure placeholder="Input your password" value={password} onChangeText={setPassword} />
      <Button title="Login" style={styles.loginbutton} onPress={Login} />
      <View>
        <Text style={styles.register}>Don't have account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={{ alignSelf: "center", color: "#6F7BE7" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
    marginTop: 100,
  },
  title: {
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  loginbutton: {
    width: "30%",
    alignSelf: "flex-end",
  },
  register: {
    alignSelf: "center",
    paddingTop: 100,
  },
  page: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: "center",
    alignSelf: "center",
  }
});

