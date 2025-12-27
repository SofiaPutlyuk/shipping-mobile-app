import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { postUser, getUser } from "../api/sign-up"
import { useEffect, useState } from "react";
export default function SignUp() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = () => {
    postUser({firstName , lastName , age , email , password})
    }
    return (
        <View style={styles.containerForm} >
            <Text style={styles.titleSignUp}>Sign Up</Text>
            <View style={styles.inputWrapper}>
                <FontAwesome6 name="user" size={24} color="#FF8A00" style={styles.inputIcon} />
                <TextInput placeholder="First Name" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={firstName} onChangeText={text => setFirstName(text)}/>
            </View>
            <View style={styles.inputWrapper}>
                <FontAwesome5 name="user-alt" size={24} color="#FF8A00" style={styles.inputIcon} />
                <TextInput placeholder="Last Name" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={lastName} onChangeText={text => setLastName(text)}/>
            </View>
            <View style={styles.inputWrapper}>
                <AntDesign name="hourglass" size={24} color="#FF8A00" style={styles.inputIcon} />
                <TextInput placeholder="Age" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={age.toString()} onChangeText={text => setAge(Number(text))}/>
            </View>
            <View style={styles.inputWrapper}>
                <Entypo name="email" size={24} color="#FF8A00" style={styles.inputIcon} />
                <TextInput placeholder="Email" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={email} onChangeText={text => setEmail(text)}/>
            </View>
            <View style={styles.inputWrapper}>
                <MaterialIcons name="password" size={24} color="#FF8A00" style={styles.inputIcon} />
                <TextInput placeholder="Password" style={styles.inputSignUp} placeholderTextColor="#FF8A00" value={password} onChangeText={text => setPassword(text)}/>
            </View>
            <TouchableOpacity style={styles.buttonSignUp} onPress={handleSubmit}>
                <Text style={styles.colorButtonSignUp}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        backgroundColor: "#17211F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30
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
        paddingLeft: 50
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