import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import { P } from './typography';

const data = [
    {
        value: 1,
        color: "red"
    },
    {
        value: 2,
        color: "blue",
    },
    {
        value: 3,
        color: "yellow",
    },
    {
        value: 4,
        color: "green",
    }

];

const renderItem = ({ item }) => (
    <View
        style={
            {
                backgroundColor: item.color,
                height: HEIGHT,
                width: width,
                justifyContent: 'center',
            }
        } >
        <P>{item.value}</P>
    </View>
);

const { height, width } = Dimensions.get("window")
const CAROUSEL_HEIGHT_THRESHOLD = 3
const HEIGHT = height / CAROUSEL_HEIGHT_THRESHOLD;



export default function Carousel() {
    return (
        <View>
            <FlatList
                horizontal={true}
                data={data}
                decelerationRate="fast"
                pagingEnabled={true}
                removeClippedSubviews={true}
                maxToRenderPerBatch={1}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={1}
                windowSize={1}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
