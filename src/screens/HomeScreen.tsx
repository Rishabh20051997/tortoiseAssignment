import { observer } from 'mobx-react'
import React, { PureComponent } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { get } from 'lodash'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { colors } from '../common/Colors'
import { homeDataStore } from '../stores'
import { HomeItemCard } from '../component/HomeItemCard'


type Props = {
    //
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        padding: hp('1%'),
        backgroundColor: colors.primaryColor
    },
    headingText: {
        fontSize: hp('3%'),
        color: colors.textPrimary
    },
    nameText: {
        fontSize: hp('2%'),
        color: colors.textTertiary,
        marginVertical: hp('1%')
    },
    itemContainer: {
        padding: 10
    },

})

@observer
export class HomeScreen extends PureComponent<Props> {
    constructor(props) {
        super(props)
    }

    componentDidMount(): void {
        homeDataStore.fetchData()
    }

    onEndReached = () => {
        homeDataStore.fetchData()
    }


    renderHeader = () => {
        return <View style={styles.headerContainer}>
            <Text style={styles.headingText}>Hello User!</Text>
        </View>
    }



    renderItem = ({ item }) => {
        const { user: { name = '' }, urls: { small = '' }, width, height } = item
        return <HomeItemCard
            url={small}
            iconHeight={height}
            iconWidth={width}
            userName={name}
        />
    }


    render() {
        const { list } = homeDataStore
        return <FlatList
            data={list}
            renderItem={this.renderItem}
            keyExtractor={( item ) => get(item, 'id')}
            ListHeaderComponent={this.renderHeader}
            style={styles.mainView}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.8}
        />
    }
}