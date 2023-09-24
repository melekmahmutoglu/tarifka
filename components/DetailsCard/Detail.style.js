import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        width: '100%',
        minHeight: 300,
        resizeMode: 'cover',
    },
    header: {
        fontSize: 36,
        fontWeight: '600',
        color: '#8a1515',
        margin: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: '400',
        color: '#8a1515',
        marginLeft: 5,
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#7c7a7a',

    },
    into: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '90%',
        minHeight: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    link: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    empty: {
        margin: 30,
    }

})