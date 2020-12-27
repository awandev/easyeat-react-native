import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import Indicators from './indicators';
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

    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        const viewableItem = viewableItems[0];
        if (viewableItem) {
            const { index } = viewableItems[0];
            setCurrentIndex(index);
        }
    });

    const viewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 50,
    });


    return (
        <View style={styles.container}>
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
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig.current}
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
            />

            <Indicators carouselSize={data.length} currentIndex={currentIndex} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: HEIGHT,
        width: '100%',
        position: 'relative',
        alignItems: 'center',
    }
})
