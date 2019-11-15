import Taro, { Component } from "@tarojs/taro"
import { View, Text } from "@tarojs/components";
import './couplet.scss'


export default class Couplet extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='couplet-view'>
        <View className='couplet-item'>
          <Text className='couplet-item__title'>上联1：</Text>
          {
            this.props.inputValue.map((item, idx) => {
              return <Text className='couplet-item__text' key={idx}>{item}</Text>
            })
          }
        </View>
        <View className='couplet-item'>
          <Text className='couplet-item__title'>下联1：</Text>
          {
            this.props.searchValue.map((item, idx) => {
              return <Text className='couplet-item__text' key={idx}>{item}</Text>
            })
          }
        </View>
      </View>
    )
  }
}
