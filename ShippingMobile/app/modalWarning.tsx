import { StyleSheet, Modal, View, Text, TouchableOpacity } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
type Props = {
    visible: boolean,
    text: string,
    closeModal: () => void
}
export default function ModalWarning({ visible, text, closeModal }: Props) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.background}>
                <View style={styles.modal}>
                    <TouchableOpacity onPress={closeModal} style={styles.buttonClose}>
                        <Entypo name="circle-with-cross" size={24} color="#FF8A00" />
                    </TouchableOpacity>
                    <Text style={styles.textModal}>{text}</Text>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    background: {
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        flex: 1,
    },
    modal: {
        width: 300,
        height: 300,
        backgroundColor: "white",
        margin:"auto",
        borderRadius:10
    },
    textModal: {
        color: "#FF8A00",
        fontSize: 28,
        fontFamily: "Nunito",
        textAlign:"center",
        marginTop:80
    },
    buttonClose: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#FF8A00",
        borderStyle: "solid",
        display:"flex",
        alignItems:"center",
        position:"absolute",
        right:0,
        top:10,
        marginRight:10
    }
})