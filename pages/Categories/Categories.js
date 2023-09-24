import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Category from '../../components/CategoryCard/Category';
import styles from './Categories.style'
import useFetch from '../../hooks/useFetch/useFecth';
import Loading from '../../components/Animations/Loading';

const Categories = ({ navigation }) => {
    const apiUrl = process.env.EXPO_PUBLIC_CATEGORY_API_URL;
    const { data, loading, error } = useFetch(apiUrl)

    const navigationMeals = strCategory => {
        navigation.navigate('Meals', { strCategory })
    }

    if (loading) {
        return (
            <View style={styles.container}>
                <Loading />
            </View>
        )
    }

    if (error) {
        return <Text>Error...</Text>
    }


    const renderCategory = ({ item }) => <Category category={item} onPress={() => navigationMeals(item.strCategory)} />

    return (
        <View style={styles.container}>
            <FlatList
                data={data.categories}
                renderItem={renderCategory}
            />
        </View>
    )
}

export default Categories