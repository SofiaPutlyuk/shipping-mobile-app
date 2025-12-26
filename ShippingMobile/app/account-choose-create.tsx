import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import rectangleTurquoise from "../assets/imagesShipping/rectangleTurquoise.png"
import rectangleOrange from "../assets/imagesShipping/rectangleOrange.png"
import rectangleOrangeBig from "../assets/imagesShipping/rectangleOrangeBig.png"
import rectangleGreenBig from "../assets/imagesShipping/rectangleGreenBig.png"
import AntDesign from '@expo/vector-icons/AntDesign';
export default function AccountChooseCreate() {
    return (
        <View style={styles.container}>
            <Image source={rectangleTurquoise} style={styles.elementTop} />
            <Text style={styles.titleAccount}>Account</Text>
            <TouchableOpacity style={styles.buttonAccount}>
                <Text style={styles.colorButtonAccount}>Sign up</Text>
            </TouchableOpacity>
            <Image source={rectangleOrange} style={styles.elementMedium} />
            <TouchableOpacity style={styles.buttonAccount}>
                <Text style={styles.colorButtonAccount}>Log in</Text>
            </TouchableOpacity>
            <Image source={rectangleOrangeBig} style={styles.elementMediumTwo} />
            <View style={styles.containerButtonMethod}>
                <TouchableOpacity style={styles.buttonMethod}>
                    <Text style={styles.colorButtonAccount}>Sign up with Google <AntDesign name="google" size={14} color="#FF8A00" /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMethod}>
                    <Text style={styles.colorButtonAccount}>Sign up with Apple <AntDesign name="apple" size={14} color="#FF8A00" /></Text>
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
        zIndex: -1
    },
    elementMediumTree:{
      position:"absolute",
      left:0,
      zIndex:-1,
      bottom:30
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
        width: 240,
        height: 50,
        borderStyle: "solid",
        borderColor: "#FF8A00",
        borderWidth: 3,
        borderRadius: 15,
    }
})