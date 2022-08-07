import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setIsLogin, clearIsLogin } from "../Service/Auth/AuthSlice";


import LoginScreen from "../Pages/LoginScreen";
import RegisterScreen from "../Pages/RegisterScreen";
import HomeScreen from "../Pages/HomeScreen";
import DetailScreen from "../Pages/DetailScreen";
import AboutScreen from "../Pages/AboutScreen";

const Stack = createNativeStackNavigator();

export default App = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch(setIsLogin());
      } else {
        // User is signed out
        // ...
        dispatch(clearIsLogin());
      }
    });
  })


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogin ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
