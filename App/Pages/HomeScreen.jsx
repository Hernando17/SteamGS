import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { getAll } from "../Service/Item/item";
import { SignOutAct } from '../Service/Auth/Auth';
import { getAuth } from "firebase/auth";


export default function HomeScreen({ navigation }) {
    const [game, setGame] = useState("");

    const auth = getAuth();
    const user = auth.currentUser;
    const email = user.email;

    const gameFetch = async () => {
        try {
            const result = await getAll();
            setGame(result.data.specials.items);
        } catch (error) {
            console.log(error)
        }
    }

    const SignOut = async () => {
        try {
            await SignOutAct();
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        gameFetch()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <Text style={{ color: "#6F7BE7" }}>{email}</Text>
                <TouchableOpacity title="Logout" onPress={() => {
                    try {
                        SignOut()
                    } catch (error) {
                        console.log(error)
                    }
                }}>

                    <Text style={{ color: "#6F7BE7" }}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={{ paddingHorizontal: 30, fontSize: 20, fontWeight: "bold", marginTop: 30, }}>Currently Special Sale</Text>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={{ paddingBottom: "100%" }}
                    data={game}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("DetailScreen", {
                            screen: "DetailScreen",
                            params: {
                                image: item.header_image,
                                name: item.name,
                                percent: item.discount_percent,
                                price: item.final_price,
                                normalPrice: item.original_price,
                                currency: item.currency,
                                windows: item.windows_available,
                                apple: item.mac_available,
                                linux: item.linux_available,
                            }
                        })}>
                            <View style={styles.card}>
                                <Text style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    color: "white",
                                    backgroundColor: "#F05361",
                                    padding: 3,
                                    width: 50,
                                    margin: 7,
                                    right: 0,
                                    textAlign: "center",
                                    borderRadius: 100,
                                }}>-{item.discount_percent}%</Text>
                                <Image
                                    source={{ uri: `${item.header_image}` }}
                                    style={styles.image}
                                />
                                <View style={styles.detail}>
                                    <Text>{item.name}</Text>
                                    <Text style={{ textAlign: "right" }}>{item.currency} {item.final_price}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        width: "100%",
        height: 150,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: "#6F7BE7",
        borderWidth: 0.5,
    },
    user: {
        flexDirection: "row",
        marginTop: 50,
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
    list: {
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    content: {
        paddingVertical: 30,
    },
    image: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'contain',
    },
    detail: {
        padding: 10,
    },
})