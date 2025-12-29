import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import GoogleSignUp from "./sign-up-google";
import rectangleTurquoise from "../assets/imagesShipping/rectangleTurquoise.png"
import rectangleOrange from "../assets/imagesShipping/rectangleOrange.png"
import rectangleOrangeBig from "../assets/imagesShipping/rectangleOrangeBig.png"
import rectangleGreenBig from "../assets/imagesShipping/rectangleGreenBig.png"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";

export default function AccountChooseCreate() {
    const [googlePrompt, setGooglePrompt] = useState<{
        promptAsync: () => Promise<any>;
        request: any;
    } | null>(null);
    return (
        <View style={styles.container}>
            <GoogleSignUp onReady={(promptAsync, request) => {
                setGooglePrompt({ promptAsync, request });
            }} />
            <Image source={rectangleTurquoise} style={styles.elementTop} />
            <Image source={rectangleOrangeBig} style={styles.elementMediumTwo} />
            <Text style={styles.titleAccount}>Account</Text>
            <TouchableOpacity style={styles.buttonAccount} onPress={() => router.push("/sign-up")}>
                <Text style={styles.colorButtonAccount}>Sign up</Text>
            </TouchableOpacity>
            <Image source={rectangleOrange} style={styles.elementMedium} />
            <TouchableOpacity style={styles.buttonAccount} onPress={() => router.push("/log-in")}>
                <Text style={styles.colorButtonAccount}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.containerButtonMethod}>
                <TouchableOpacity style={styles.buttonMethod} disabled={!googlePrompt?.request}
                    onPress={() => googlePrompt?.promptAsync?.()}>
                    <Text style={styles.colorButtonMethod}>Sign up with Google <AntDesign name="google" size={14} color="#FF8A00" /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMethod}>
                    <Text style={styles.colorButtonMethod}>Sign up with Apple <AntDesign name="apple" size={14} color="#FF8A00" /></Text>
                </TouchableOpacity>
            </View>
            <Image source={rectangleGreenBig} style={styles.elementMediumTree} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#17211F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
    },
    elementTop: {
        position: "absolute",
        right: 0,
        top: 0,
        transform: [{ rotate: "-180deg" }]
    },
    elementMedium: {
        position: "absolute",
        left: 0,
        top: 100
    },
    elementMediumTwo: {
        position: "absolute",
        right: 0,
    },
    elementMediumTree: {
        position: "absolute",
        left: 0,
        bottom: 30
    },
    titleAccount: {
        fontSize: 48,
        color: "white",
    },
    buttonAccount: {
        width: 350,
        height: 60,
        borderStyle: "solid",
        borderColor: "#FF8A00",
        borderWidth: 3,
        borderRadius: 15,

    },
    colorButtonAccount: {
        color: "#65cdb2",
        textAlign: "center",
        margin: "auto",
        fontSize: 18
    },
    containerButtonMethod: {
        display: "flex",
        gap: 20,
        flexDirection: "row",
    },
    buttonMethod: {
        width: 160,
        height: 50,
        borderStyle: "solid",
        borderColor: "#FF8A00",
        borderWidth: 3,
        borderRadius: 15,
    },
    colorButtonMethod: {
        color: "#65cdb2",
        textAlign: "center",
        margin: "auto",
        fontSize: 12
    }
})