<template>
  <view class="container">
    <view class="btn-group">
      <button class="btn btn-primary" @click="goNativeWebview">原生 WebView</button>
      <button class="btn btn-success" @click="goX5Webview">X5 WebView</button>
      <button class="btn btn-wechat" @click="goWechatChat">X5 微信聊天</button>
    </view>
  </view>
</template>

<script setup>
const goNativeWebview = () => {
  uni.navigateTo({
    url: '/pages/webview/native-webview?url=' + encodeURIComponent('/static/plus-bridge-test.html')
  });
};

const goX5Webview = () => {
  uni.navigateTo({
    url: '/pages/webview/x5-webview?url=' + encodeURIComponent('/static/plus-bridge-test.html')
  });
};

const goWechatChat = () => {
  uni.navigateTo({
    url: '/pages/webview/x5-wechat?url=' + encodeURIComponent('/static/wechat-chat.html')
  });
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.btn-group {
  display: flex;
  flex-direction: column;
  gap: 40rpx;
  width: 80%;
}

.btn {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  font-size: 32rpx;
  color: #ffffff;
  border-radius: 16rpx;
  border: none;
}

.btn-primary {
  background-color: #007aff;
}

.btn-success {
  background-color: #34c759;
}

.btn-wechat {
  background-color: #07c160;
}

.btn::after {
  border: none;
}
</style>
