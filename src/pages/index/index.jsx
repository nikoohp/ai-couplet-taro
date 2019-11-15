import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import './index.scss'

import Header from "./components/header/header";
import Couplet from "./components/couplet/couplet";
import Buttons from "./components/buttons/buttons";

export default class Index extends Component {

  constructor() {
    super(...arguments)

    this.state = {
      inputValue: '',
      searchValue: '',
    }
  }


  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide() { }

/**
 * 指定config的类型声明为: Taro.Config
 *
 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
 */

  config: Config = {}


  getInputValue(data) {
    this.setState({
      inputValue: data
    })
  }

  getSearchValue(data) {
    this.setState({
      searchValue: data
    })
  }

  handleInput(e) {

    this.setState({
      inputValue: e.detail.value,
    })

    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return e.detail.value
  }

  render () {
    return (
      <View className='index'>
        <Header />

        <Input
          focus
          className='input'
          type='text'
          placeholder='请输入上联'
          onInput={this.handleInput.bind(this)}
          onChange={this.handleInput.bind(this)}
        >
        </Input>

        <Couplet
          inputValue={this.state.inputValue}
          searchValue={this.state.searchValue}
        >
        </Couplet>

        <Text className='thanks'>感谢 王斌(https://github.com/wb14123/seq2seq-couplet)提供的深度学习对对联项目</Text>

        <Buttons
          inputValue={this.state.inputValue}
          dispatchSearchValue={this.getSearchValue.bind(this)}
        ></Buttons>
      </View>
    )
  }
}
