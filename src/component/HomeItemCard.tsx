import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { colors } from '../common/Colors'
import { IconWrapper } from './IconWrapper'


interface Props {
    url: string
    iconHeight: number | string
    iconWidth: number | string
    userName: string
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

export class HomeItemCard extends PureComponent<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        const { iconHeight, iconWidth, userName, url } = this.props

        return <View style={styles.itemContainer}>
            <Text style={styles.nameText}>{userName}</Text>
            <IconWrapper
                iconImage={url}
                iconWidth={iconWidth}
                iconHeight={iconHeight}
            />
        </View>
    }
}
