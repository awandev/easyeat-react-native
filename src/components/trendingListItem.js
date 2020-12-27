import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { P } from './typography'

export default function TrendingListItem({ name, distance, image }) {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.logo} source={image} />
            <P style={styles.name}>{name}</P>

            <View style={styles.distanceContainer}>
                <P style={styles.distanceText}>{distance}</P>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#eee',
        padding: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    },
    logo: {
        width: 50,
        height: 50,
    },
    name: {
        fontSize: 12,
        fontFamily: "FiraSansBold",
        marginVertical: 4,
    },
    distanceContainer: {
        paddingHorizontal: 8,
        backgroundColor: '#eeeeee',
        paddingVertical: 5,
        borderRadius: 5,

    },

    distanceText: {
        fontSize: 10,
        fontFamily: "FiraSansMedium",
    }


})
