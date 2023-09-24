import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import styles from './Detail.style'

const DetailCard = ({ item }) => {
    return (
        <ScrollView>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <View style={styles.titleContainer}>
                <Text style={styles.header}>{item.strCategory}</Text>
                <Text style={styles.title}>{item.strArea}</Text>
            </View>
            <Text style={styles.into}>{item.strInstructions}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(item.strYoutube)} style={styles.buttonContainer}>
                    <Text style={styles.link}>Wacth on Youtube</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.empty}></View>
        </ScrollView>
    )
}

export default DetailCard