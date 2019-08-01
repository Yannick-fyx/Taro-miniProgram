import Taro, { Component, Config } from "@tarojs/taro";
import { AtMessage, AtButton, AtIcon } from "taro-ui";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页"
  };

  handleClick = type => {
    Taro.atMessage({
      message: "消息通知",
      type: type
    });
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Swiper
          className="test-h"
          indicatorColor="#ccc"
          indicatorActiveColor="#C81C3A"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className="demo-text-1">1</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">2</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">3</View>
          </SwiperItem>
        </Swiper>

        <View>
          <AtIcon value="clock" size="30" color="#F00" />
          <AtMessage />
          <AtButton onClick={this.handleClick}>普通消息</AtButton>
          <AtButton onClick={() => this.handleClick("success")}>
            成功消息
          </AtButton>
          <AtButton onClick={() => this.handleClick("error")}>
            错误消息
          </AtButton>
          <AtButton onClick={() => this.handleClick("warning")}>
            警告消息
          </AtButton>
        </View>
      </View>
    );
  }
}
