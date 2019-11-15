import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import './buttons.scss'


export default class Buttons extends Component {
  constructor() {
    super(...arguments)
  }

  handleOcr() {
    Taro.chooseImage().then(res => {
      // eslint-disable-next-line no-undef
      wx.getFileSystemManager().readFile({
        filePath: res.tempFilePaths[0], //选择图片返回的相对路径
        encoding: 'base64', //编码格式
        success: res1 => { //成功的回调
          console.log('data:image/png;base64,' + res1.data)
        }
      })
    })
  }

  handleVoice() {
    console.log('语音输入');

  }

  handleSearch() {
    if (this.props.inputValue === '') {
      Taro.showToast({
        title: '请输入上联',
        icon: 'none',
        duration: 2000
      })
      return
    }
    Taro.showLoading({
      title: 'loading'
    })

    Taro.request({
      url: 'https://ai-backend.binwang.me/chat/couplet/' + this.props.inputValue,
    }).then(res => {
      if (res.statusCode === 200) {
        this.props.dispatchSearchValue(res.data.output.split(''))
        Taro.hideLoading()
      }

    })
  }


  render() {
    return (
      <View className='buttons-view'>
        {/* <View className='buttons-item'>
          <View className='ocr-button' onClick={this.handleOcr.bind(this)}>识别图片</View>
        </View>
        <View className='buttons-item'>
          <View className='voice-button' onClick={this.handleVoice.bind(this)}>语音输入</View>
        </View> */}
        <View className='buttons-item'>
          <View className='ocr-button' onClick={this.handleSearch.bind(this)}>搜索下联</View>
        </View>
      </View>
    )
  }
}