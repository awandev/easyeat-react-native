import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function horizontalList({ keyExtractor, data, renderItem, itemSeparator }) {



    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparator}

            />
        </View>
    )
}

const ItemSeparator = () => <View style={styles.itemSeparator} />;
const HeaderFooter = () => <View style={styles.headerFooter} />



const styles = StyleSheet.create({

    container: {
        marginVertical: 24,
        paddingHorizontal: 24,
    },

    itemSeparator: {
        width: 12,
    },

    headerFooter: {
        width: 24,
    }
})
