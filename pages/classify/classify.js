// pages/classify/classify.js
import { gettuijian } from '../../service/classify.js'

const navcurrent = ['dy', 'auto', 'home', 'money', 'tech', 'toutiao']
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    shopdata: ['推荐','汽车','家居','财经','科技','新闻'],
    currtype:'dy',
    tuijian:{
      dy:[],
      auto:[],
      home:[],
      money:[],
      tech:[],
      toutiao:[]
    },
    choosenav:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._gettuijian('dy')
    this._gettuijian('auto')
    this._gettuijian('home')
    this._gettuijian('money')
    this._gettuijian('tech')
    this._gettuijian('toutiao')


  },

  // 网络请求
  _gettuijian(type){
    gettuijian().then((res)=>{
      // console.log(res)
      const list = res.data.data[type]
      // console.log(tuijiandata)
      const oldlist = this.data.tuijian[type]
      // console.log(oldlist)
      oldlist.push(...list)
      // console.log(oldlist)

      const key = `tuijian.${type}`
      // console.log(key)
     
      this.setData({
        [key]: oldlist
      })

    })
  
  },

  currtnav(e){
    // console.log(e.currentTarget.dataset.index)
    const currindex = e.currentTarget.dataset.index
    this.setData({
      choosenav: currindex,
      currtype: navcurrent[currindex]
    })

    
    

   
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})