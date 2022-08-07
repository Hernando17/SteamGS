import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DetailScreen({ navigation, route }) {
    const data = route.params;
    const windows = () => {
        if (data.params.windows) {
            return (
                <View>
                    <Image style={{ width: 30, height: 30 }} source={require("../Asset/windows.png")} />
                </View>
            )
        }
    }

    const apple = () => {
        if (data.params.apple) {
            return (
                <View>
                    <Image style={{ width: 25, height: 25 }} source={require("../Asset/apple.png")} />
                </View>
            )
        }
    }

    const linux = () => {
        if (data.params.linux) {
            return (
                <View>
                    <Image style={{ width: 25, height: 25, marginLeft: 5 }} source={require("../Asset/linux.png")} />
                </View>
            )
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ textAlign: "right", color: "#6F7BE7" }}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={{
                    position: "absolute",
                    zIndex: 1,
                    color: "white",
                    backgroundColor: "#F05361",
                    padding: 5,
                    width: 50,
                    marginTop: 50,
                    marginRight: 30,
                    margin: 7,
                    right: 0,
                    textAlign: "center",
                    borderRadius: 100,
                }}>-{data.params.percent}%</Text>
                <Image
                    source={{ uri: `${data.params.image}` }}
                    style={styles.image}
                />
                <View style={styles.detail}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>{data.params.name}</Text>
                    <Text>Current Price</Text>
                    <Text style={{ marginBottom: 10, }}>{data.params.currency} {data.params.price}</Text>
                    <Text>Normal Price</Text>
                    <Text>{data.params.currency} {data.params.normalPrice}</Text>
                    <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 14 }}>Support Operating System</Text>
                    <View style={styles.support}>
                        {windows()}
                        {apple()}
                        {linux()}
                    </View>
                    <Text style={styles.developer}>About</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("AboutScreen")}>
                        <Text style={{ color: "#6F7BE7", alignSelf: "center" }}>Developer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        marginTop: 50,
        width: "90%",
        alignSelf: "center",
    },
    image: {
        width: '90%',
        height: 180,
        resizeMode: 'contain',
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 40,
    },
    content: {
        flex: 1,
    },
    detail: {
        marginTop: 20,
        width: "90%",
        alignSelf: "center",
    },
    support: {
        flexDirection: "row",
        marginTop: 5,
    },
    developer: {
        alignSelf: "center",
        marginTop: 50,
    }


})