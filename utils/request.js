const ourl = 'https://shop.maohemao.com/mgr/index/'//接口
let header = {
  'content-type': 'application/json',
  'openid': '',
  'sessionid': ''
}
wx.getStorage({//获取本地缓存的openid 通过heder发送给后台
  key: 'sessionid',
  success(e) {
    header.openid = e.data.openid
    header.sessionid = e.data.sessionid
  }
}),
// const header = 'application/x-www-form-urlencoded'//python后台
function request(url, method, data) {
  let promise = new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: ourl + url,
      method: method,
      data: {
        datas: data
      },
      header: header,
      success: (res => {
        wx.hideLoading();
        if (res.statusCode == 200) {
          resolve(res);
        } else {
          reject(res.data);
        }
      }),
      fail: (res => {
        wx.hideLoading();
        wx.showToast({
          title: '网络出错',
          icon: 'none',
          duration: 1500
        })
        reject('网络出错');
      })
    })
  })
  return promise;
}

module.exports = {
  request: request
}


// 使用的时候
// const howe = require("utils/request.js");//引用
// howe.request('/list', 'POST', data).then(res => {//使用
//   console.log(res);
// })



// 另一种请求
// export default function (options) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       // url: baseURL + options.url,
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: resolve,
//       fail: reject
//     })
//   })
// }
// 分层处理
// import request from './request.js'

// export function getMultiDate() {
//   return request({
//     url: 'https://www.apiopen.top/meituApi'
//   })
// }
// 页面引用
// import {
//   getMultiDate

// } from '../../service/testwork.js'

// getMultiDate().then(res => {
//   // console.log(res.data.data)
//   const totopSwiper = res.data.data.splice(0, 4);
//   const tuijian = res.data.data.splice(0, 4);
//   const popularlike = res.data.data.splice(0, 8)
//   // console.log(res.data.data)
//   this.setData({
//     totopSwiper,
//     tuijian,
//     popularlike
//   })
// }).catch(err => { console.log(err) })