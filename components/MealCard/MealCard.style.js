import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mealContainer: {
        minHeight: 250,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 13,
    },
    image: {
        resizeMode: 'cover',
        width: '97%',
        minHeight: 250,
        borderRadius: 10,
        position: 'absolute',
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        padding: 10,
        textAlign: 'right',
        bottom: 0,
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '97%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})