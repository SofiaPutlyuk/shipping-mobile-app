import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import backgroundAccount from "../assets/imagesShipping/backgroundAccount.png"
import orangeRectangle from "../assets/imagesShipping/rectangleOrange.png"
import greenBigRectangle from "../assets/imagesShipping/rectangleGreenBig.png"
import orangeBigRectangle from "../assets/imagesShipping/rectangleOrangeBig.png"
import { postUser} from "../api/sign-up"
import { useState } from "react";
export default function SignUp() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = () => {
        const numericAge = Number(age)
        postUser({ firstName, lastName, age: numericAge, email, password })
    }
    return (
        <ImageBackground source={backgroundAccount} style={styles.background}>
            <Image source={orangeRectangle} style={styles.elementTop} />
            <Image source={greenBigRectangle} style={styles.elementMediumOne} />
            <Image source={orangeBigRectangle} style={styles.elementMediumTwo} />
            <Image source={greenBigRectangle} style={styles.elementThree} />
            <Image source={orangeRectangle} style={styles.elementFour} />
            <View style={styles.containerForm}>
                <Text style={styles.titleSignUp}>Sign Up</Text>
                <View style={styles.inputWrapper}>
                    <FontAwesome6 name="user" size={24} color="#FF8A00" style={styles.inputIcon} />
                    <TextInput placeholder="First Name" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={firstName} onChangeText={text => setFirstName(text)} />
                </View>
                <View style={styles.inputWrapper}>
                    <FontAwesome5 name="user-alt" size={24} color="#FF8A00" style={styles.inputIcon} />
                    <TextInput placeholder="Last Name" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={lastName} onChangeText={text => setLastName(text)} />
                </View>
                <View style={styles.inputWrapper}>
                    <AntDesign name="hourglass" size={24} color="#FF8A00" style={styles.inputIcon} />
                    <TextInput placeholder="Age" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={age.toString()} onChangeText={text => setAge(text)} />
                </View>
                <View style={styles.inputWrapper}>
                    <Entypo name="email" size={24} color="#FF8A00" style={styles.inputIcon} />
                    <TextInput placeholder="Email" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={email} onChangeText={text => setEmail(text)} />
                </View>
                <View style={styles.inputWrapper}>
                    <MaterialIcons name="password" size={24} color="#FF8A00" style={styles.inputIcon} />
                    <TextInput placeholder="Password" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={password} onChangeText={text => setPassword(text)} />
                </View>
                <TouchableOpacity style={styles.buttonSignUp} onPress={handleSubmit}>
                    <Text style={styles.colorButtonSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#17211F",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    containerForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30
    },
    elementTop: {
        position: "absolute",
        left: 0,
        top: "6%"
    },
    elementMediumOne: {
        position: "absolute",
        right: 0,
        top: "20%"
    },
    elementMediumTwo: {
        position: "absolute",
        left: 0,
        top: "40%"
    },
    elementThree: {
        position: "absolute",
        right: 0,
        top: "50%"
    },
    elementFour: {
        position: "absolute",
        left: 0,
        top: "80%"
    },
    titleSignUp: {
        color: "white",
        fontFamily: "Nunito",
        fontSize: 36
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
    inputSignUp: {
        width: 300,
        height: 50,
        borderRadius: 15,
        borderColor: "#FF8A00",
        borderWidth: 2,
        paddingLeft: 50,
        color:"white"
    },
    buttonSignUp: {
        width: 250,
        height: 40,
        backgroundColor: "#FF8A00",
        borderRadius: 8
    },
    colorButtonSignUp: {
        color: "white",
        fontFamily: "Nunito",
        fontSize: 18,
        margin: "auto"
    }

})