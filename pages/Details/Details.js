import { View, Text } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/useFecth';
import DetailCard from '../../components/DetailsCard/DetailCard';
import Loading from '../../components/Animations/Loading';
import styles from './Details.style'

const Details = ({ route }) => {
    const detailAPI = process.env.EXPO_PUBLIC_DETAILS_API_URL;
    const { idMeal } = route.params;
    const { data, loading, error } = useFetch(`${detailAPI}=${idMeal}`);

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Text>Error...</Text>
    }



    return (
        <View style={styles.container}>
            <DetailCard item={data.meals[0]} />
        </View>
    )
}

export default Details