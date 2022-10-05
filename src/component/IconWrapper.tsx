import React, { PureComponent } from 'react'
import { Image, Dimensions } from 'react-native'
import { isNumber } from 'lodash'

const getImageSource = (imagePath) => (isNumber(imagePath) ? imagePath : { uri: imagePath })


const getIconImageStyle = (iconHeight: number | string, iconWidth: number | string) => ({
  height: iconHeight,
  width: iconWidth,
  alignSelf: 'center',
  resizeMode: 'contain'
})

interface Props {
  backgroundColor?: string
  iconHeight?: number | string
  iconImage: any
  iconWidth?: number | string
  styling?: object
  imageResizeMode?: string
}
const getWidth = () => Dimensions.get('window').width - 20
const calculateDimenstion = (iconHeight, iconWidth) => {
  const newHeight = (iconHeight/ iconWidth) * getWidth()
  return newHeight
}

export class IconWrapper extends PureComponent<Props> {
  static defaultProps = {
    backgroundColor: '#000',
    iconHeight: 50,
    iconWidth: 50,
    imageResizeMode: 'contain',
    styling: {},
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { iconHeight, iconWidth, imageResizeMode, iconImage, styling } = this.props
    const newHeight = calculateDimenstion(iconHeight, iconWidth)
    return (
      <Image
        source={getImageSource(iconImage)}
        style={[getIconImageStyle(newHeight, iconWidth), { resizeMode: imageResizeMode }, styling]}
      />
    )
  }
}
