import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Touchable,
    TouchableOpacity,
} from "react-native";

export default function AboutScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View
                    style={{
                        paddingHorizontal: 20,
                        marginTop: 40,
                        alignItems: "flex-end",
                        height: "2%",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{ color: "#6F7BE7" }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>About Me</Text>
                    <View style={[styles.card, { elevation: 7 }]}>
                        <Image
                            style={styles.profile}
                            source={require("../Asset/vettel.jpg")}
                        />
                        <View style={styles.aboutbody}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    alignItems: "center",
                                }}
                            >
                                Hernando
                            </Text>
                            <View
                                style={{
                                    width: "60%",
                                    height: 2,
                                    margin: 5,
                                    borderRadius: 10,
                                    backgroundColor: "#000",
                                }}
                            ></View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    alignItems: "center",
                                }}
                            >
                                Developer
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Social Media</Text>
                    <View style={[styles.card, styles.boxShadow]}>
                        <View style={styles.socialbody}>
                            <Text style={styles.socialtitle}>Instagram </Text>
                            <Text style={styles.socialname}>@hernando.exe</Text>
                            <Text style={styles.socialtitle}>Twitter </Text>
                            <Text style={styles.socialname}>@Hernando</Text>
                            <Text style={styles.socialtitle}>Facebook </Text>
                            <Text style={styles.socialname}>Hernando</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Project</Text>
                    <View style={[styles.card, styles.boxShadow]}>
                        <View style={styles.socialbody}>
                            <Text style={styles.socialtitle}>GitHub </Text>
                            <Text style={styles.socialname}>Hernando17</Text>
                            <Text style={styles.socialtitle}>GitLab </Text>
                            <Text style={styles.socialname}>@Hernando17</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Skill</Text>
                    <View style={[styles.card, styles.boxShadow]}>
                        <View style={styles.skillbody}>
                            <View style={styles.programmingsec}>
                                <Text
                                    style={{
                                        width: "89%",
                                        marginBottom: 7,
                                        fontSize: 12,
                                        color: "#656464",
                                    }}
                                >
                                    Programming
                                </Text>
                                <View style={styles.programming}>
                                    <View style={styles.icon}>
                                        <Image
                                            style={styles.iconimg}
                                            source={require("../Asset/laravel.png")}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.icontitle}>Laravel</Text>
                                        <Text style={styles.iconlevel}>Intermediate</Text>
                                    </View>
                                </View>
                                <View style={styles.programming}>
                                    <View style={styles.icon}>
                                        <Image
                                            style={{ width: 15, height: 15 }}
                                            source={require("../Asset/php.png")}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.icontitle}>PHP</Text>
                                        <Text style={styles.iconlevel}>Intermediate</Text>
                                    </View>
                                </View>
                                <View style={styles.programming}>
                                    <View style={styles.icon}>
                                        <Image
                                            style={styles.iconimg}
                                            source={require("../Asset/javascript.png")}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.icontitle}>Javascript</Text>
                                        <Text style={styles.iconlevel}>Basic</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.designsec}>
                                <Text
                                    style={{
                                        width: "89%",
                                        marginBottom: 7,
                                        fontSize: 12,
                                        color: "#656464",
                                    }}
                                >
                                    Graphic Design
                                </Text>
                                <View style={styles.design}>
                                    <View style={styles.icon}>
                                        <Image
                                            style={styles.iconimg}
                                            source={require("../Asset/photoshop.jpg")}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.icontitle}>Photoshop</Text>
                                        <Text style={styles.iconlevel}>Advanced</Text>
                                    </View>
                                </View>
                                <View style={styles.design}>
                                    <View style={styles.icon}>
                                        <Image
                                            style={styles.iconimg}
                                            source={require("../Asset/illustrator.png")}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.icontitle}>Illustrator</Text>
                                        <Text style={styles.iconlevel}>Advanced</Text>
                                    </View>
                                </View>
                                <View style={styles.design}>
                                    <View style={styles.icon}>
                                        <Image
                                            style={styles.iconimg}
                                            source={require("../Asset/figma.png")}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.icontitle}>Figma</Text>
                                        <Text style={styles.iconlevel}>Intermediate</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView >
    );
}

const colors = {
    primary: "#2FD868",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 20,
        width: "85%",
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        alignItems: "center",
        marginBottom: "20%",
    },
    card: {
        flex: 1,
        width: "85%",
        borderRadius: 10,
        backgroundColor: "white",
        boxShadowColor: "black",
        padding: "5%",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    boxShadow: {
        elevation: 10,
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    aboutbody: {
        width: "70%",
        alignItems: "center",
    },
    socialbody: {
        width: "100%",
        alignItems: "center",
        paddingVertical: "7%",
    },
    socialtitle: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    socialname: {
        fontSize: 20,
        marginBottom: 20,
    },
    skillbody: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    programming: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 10,
        elevation: 5,
        flexDirection: "row",
        padding: 7,
    },
    design: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 10,
        elevation: 5,
        flexDirection: "row",
        padding: 7,
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        elevation: 1.2,
    },
    iconimg: {
        width: 20,
        height: 20,
    },
    icontitle: {
        marginTop: 4,
        fontSize: 12,
        fontWeight: "bold",
    },
    iconlevel: {
        fontSize: 12,
    },
    programmingsec: {
        flex: 1,
        width: "50%",
        alignItems: "center",
    },
    designsec: {
        flex: 1,
        width: "50%",
        alignItems: "center",
    },
});
