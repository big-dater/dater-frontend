import { TextInput, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image, ImageBackground, TouchableWithoutFeedback, Keyboard} from "react-native";
import { Background, DaterLogo } from "../../assets";

export default function Signup() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                    <Image style={styles.background} source={Background}></Image>
                    <Image style={styles.logo} source={DaterLogo}></Image>
                    <SafeAreaView style={styles.inputContainer}>
                        <TextInput placeholder="아이디를 입력하세요" style={styles.input}></TextInput>
                        <TextInput placeholder="이름을 입력하세요" style={styles.input}></TextInput>
                        <TextInput placeholder="비밀번호를 입력하세요" style={styles.input}></TextInput>
                        <TouchableOpacity style={styles.signupContainer}>
                            <Text style={styles.signup}>아직 계정이 없으신가요?</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF0F3",
        alignItems: "center",
    },
    background: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        position: "absolute",
    },
    logo: {
        marginTop: "70%"
    },
    inputContainer: {
        marginTop: "0%",
        width: "100%",
        alignItems: "center"
    },
    input: {
        width: "80%",
        height: 40,
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        borderRadius: 7,
        paddingLeft: 15
    },
    signupContainer: {
        marginTop: 10,
        width: "80%",
        alignItems: "flex-end"
    },
    signup: {
        fontSize: 16,
        color: "#FF7E7E",
        textDecorationLine: "underline"
    }
})