import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './MealCard.style'



const MealCard = ({ meal, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.mealContainer}>
                <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{meal.strMeal}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MealCard