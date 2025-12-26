import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import backgroundHomeStart from "../assets/imagesShipping/backgroundHomeStart.png"
import deliveryMan from "../assets/imagesShipping/deliveryMan.png"
import { router } from "expo-router";
export default function StartShipping() {
    return (
        <View style={styles.container}>
            <View style={styles.containerPosition}>
                <Text style={styles.title}>Easy and fast platform for shipping</Text>
                <Text style={styles.text}>we use the camera on our helment f
                    live tracking  <AntDesign name="fire" size={14} color="#FFCE31" /></Text>
            </View>
            <ImageBackground source={backgroundHomeStart} style={styles.imageBackground}>
                <Image source={deliveryMan} style={styles.imageDelivery} />
            </ImageBackground>
            <View style={styles.containerPosition}>
                <TouchableOpacity style={styles.buttonDelivery} onPress={() => router.push("/account-choose-create")}>
                    <Text style={styles.textButton}>Start shipping &gt;&gt;&gt;</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#17211F",
        display: "flex",
        gap: 30,
    },
    containerPosition: {
        position: "relative",
        left: 20
    },
    title: {
        fontSize: 48,
        lineHeight: 70,
        color: "white",
        marginTop: 108,
        fontFamily: "Nunito",
        width: 387
    },
    imageBackground: {
        height: 352
    },
    imageDelivery: {
        width: 250,
        height: 242,
        position: "relative",
        top: 120
    },
    text: {
        fontSize: 18,
        color: "white",
        fontFamily: "Nunito",
        width: 277
    },
    buttonDelivery: {
        width: 354,
        height: 57,
        borderRadius: 15,
        backgroundColor: "#FF8A00",
        textAlign: "center",
    },
    textButton: {
        textAlign: "center",
        fontFamily: "Nunito",
        fontWeight: 700,
        fontSize: 18,
        color: "white",
        position: "relative",
        top: 16,
    }
})