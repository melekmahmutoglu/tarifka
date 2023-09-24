import { View, Text, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/useFecth';
import MealCard from '../../components/MealCard';
import Loading from '../../components/Animations/Loading';
import styles from './Meals.style'

const Meals = ({ route, navigation }) => {
    const mealAPI = process.env.EXPO_PUBLIC_MEALS_API_URL;
    const { strCategory } = route.params;
    const { data, loading, error } = useFetch(`${mealAPI}=${strCategory}`);

    const navigationDetails = (idMeal) => {
        navigation.navigate('Details', { idMeal })
    }


    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Text>Error...</Text>
    }

    const renderMeal = ({ item }) => <MealCard meal={item} onPress={() => navigationDetails(item.idMeal)} />

    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeal}
                keyExtractor={item => item.idMeal}
            />
        </View>
    )
}

export default Meals