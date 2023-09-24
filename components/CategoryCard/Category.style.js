import { StyleSheet } from "react-native";

export default StyleSheet.create({
    categoryContainer: {
        backgroundColor: '#ecebeb',
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        borderTopLeftRadius: 70,
        borderBottomLeftRadius: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bbbaba',
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        borderRadius: 100,
    },
    titleContainer: {
        justifyContent: 'center',
        margin: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 0.7,
    },
})