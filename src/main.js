// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。

// axios 请求
/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
