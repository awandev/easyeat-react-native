import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { H5, P } from './typography'
import Rating from './rating'

export default function PopularPlaceItem({ name, rating, location, liked, image, opened }) {
    return (
        <View style={styles.container}>

            <ImageBackground
                source={image}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <View style={styles.topActions}>
                    <View style={styles.placeAccessContainer}>
                        <P style={styles.placeAccessText}>{opened ? 'Opened' : 'Closed'}</P>
                    </View>
                    <Icon name={liked ? "heart" : "heart-outline"} size={20} color="#ffffff" />
                </View>
            </ImageBackground>

            <View style={styles.placeInfoContainer}>
                <H5 style={styles.placeName}>{name}</H5>
                <P style={styles.placeLocation}>{location}</P>
                <Rating rating={rating} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 220,
        borderRadius: 10,
        borderColor: '#eeeeee',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        overflow: 'hidden',
    },

    imageBackground: {
        width: '100%',
        height: 120,
    },

    topActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    placeAccessContainer: {
        paddingVertical: 3,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
    },
    placeAccessText: {
        color: '#fff',
        fontSize: 10,
        textTransform: 'uppercase',
    },
    placeInfoContainer: {
        padding: 8,
        backgroundColor: '#ffffff',
    },
    placeName: {
        fontSize: 14,
    },
    placeLocation: {
        fontSize: 12,
        color: '#8f8f8f'
    }
})
