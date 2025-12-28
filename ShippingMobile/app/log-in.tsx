import { View, TextInput, StyleSheet, ImageBackground, Text, Image, TouchableOpacity } from "react-native"
import backgroundScreenLog from "../assets/imagesShipping/backgroundScreenLog.png"
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import greenRectangle from "../assets/imagesShipping/rectangleTurquoise.png"
import bigOrangeRectangle from "../assets/imagesShipping/rectangleOrangeBig.png"
import greenBigRectangle from "../assets/imagesShipping/rectangleGreenBig.png"
import orangeRectangle from "../assets/imagesShipping/rectangleOrange.png"
import { useState } from "react";
import {logIn} from "../api/log-in"
export default function LogIn() {
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const handleSubmit = () => {
    logIn({email , password})
}
    return (
        <ImageBackground source={backgroundScreenLog} style={styles.backgroundLogIn}>
            <Image source={greenRectangle} style={styles.elementTop} />
            <Image source={bigOrangeRectangle} style={styles.elementMediumOne} />
            <Image source={greenBigRectangle} style={styles.elementMediumTwo} />
            <Image source={orangeRectangle} style={styles.elementMediumThree} />
            <View style={styles.containerForm}>
                <Text style={styles.titleLogIn}>Log In</Text>
                <View style={styles.inputWrapper}>
                    <Entypo name="email" size={24} color="#FF8A00" style={styles.inputIcon} />
                    <TextInput placeholder="Email" placeholderTextColor="#FF8A00" style={styles.inputLogIn} value={email} onChangeText={text => setEmail(text)}/>
                </View>
                <View style={styles.inputWrapper}>
                    <MaterialIcons name="password" size={24} color="#FF8A00" style={styles.inputIcon} />
                    <TextInput placeholder="Password" placeholderTextColor="#FF8A00" style={styles.inputLogIn} value={password} onChangeText={text => setPassword(text)}/>
                </View>
                <TouchableOpacity style={styles.buttonLogIn} onPress={handleSubmit}>
                    <Text style={styles.colorButtonLogIn}>Log in</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backgroundLogIn: {
        flex: 1,
        display: "flex",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#17211F",
    },
    containerForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30
    },
    titleAccount: {
        fontSize: 48,
        color: "white",
    },
    inputWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    inputIcon: {
        position: "relative",
        left: 35,
    },
    inputLogIn: {
        width: 300,
        height: 50,
        borderRadius: 15,
        borderColor: "#FF8A00",
        borderWidth: 2,
        paddingLeft: 50,
        color: "white"
    },
    titleLogIn: {
        color: "white",
        fontFamily: "Nunito",
        fontSize: 36
    },
    elementTop: {
        position: "absolute",
        right: 0,
        top: 0,
        transform: [{ rotate: "-180deg" }]
    },
    elementMediumOne: {
        position: "absolute",
        left: 0,
        top: "30%"
    },
    elementMediumTwo: {
        position: "absolute",
        right: 0,
        top: "60%"
    },
    elementMediumThree: {
        position: "absolute",
        left: 0,
        top: "80%"
    },
    buttonLogIn: {
        width: 250,
        height: 40,
        backgroundColor: "#FF8A00",
        borderRadius: 8
    },
    colorButtonLogIn: {
        color: "white",
        fontFamily: "Nunito",
        fontSize: 18,
        margin: "auto"
    }
})