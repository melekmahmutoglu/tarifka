import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Category.style'

const Category = ({ category, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.categoryContainer}>
                <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{category.strCategory}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Category