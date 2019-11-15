import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './header.scss'

export default class header extends Component {
  render () {
    return (
      <View className='header'>
        <View className='title'>
          <Text>欢迎使用自动对对联系统</Text>
        </View>
        <View className='desc'>
          <Text>对联小贴士：本系统暂时不支持繁体字和特殊符号，断句请用全角逗号分隔。</Text>
        </View>
      </View>
    )
  }
}