import { getshoushop } from '../../service/indexRequest.js'

const shops = ['auto', 'dy','sports']
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fen:['流行','推荐','新款'],
    current:0,

    currtype:'auto',
    shop:{
      auto:{page:0,list:[]},
      dy:{page:0,list:[]},
      sports:{page:0,list:[]},
    },

    tabFixed:0,
    isFixed:false,

    isShow:false,
    scroll_top:1000,

    isHideLoadMore:true,

  },
  
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getshoushop('auto')
    this._getshoushop('dy')
    this._getshoushop('sports')

    // let json = {
    //   name: 'howe',
    //   age: 23,
    //   job: '码农'
    // }
    // let { name: a, age: b, job: c } = json
    // console.log(a, b, c)
    // let {name,age,job} = json
    // console.log(name, age, job)

  },

  // 网络请求
  _getshoushop(type){
    getshoushop().then((res) => {
      // console.log(res)
      const list = res.data.data[type]
      const oldlist = this.data.shop[type].list
      oldlist.push(...list)
      // console.log(res.data.data)

      const typekey = `shop.${type}.list`
      this.setData({
        [typekey]: oldlist
      })
    })
  },
  
  // 事件监听
  // 点击导航切换样式
  handlecurrent(e) {
    // console.log(e)
    const currentIndex = e.currentTarget.dataset.index;
    this.setData({
      current: currentIndex,
      currtype: shops[currentIndex],
      // 加载更多的隐藏
      isHideLoadMore: true
    })
  },
  // 监听图片是否加载完成，未完成时得到的top是错误的
  handleimageload(){
    wx.createSelectorQuery().select('#fen').boundingClientRect(rect => {
      this.data.tabFixed = rect.top
    }).exec()
  },

  // 点击回到顶部
  handleTop(){
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  // 判断回到顶部是否显示
  onPageScroll(options){
    const flag1 = options.scrollTop >= this.data.scroll_top
    if (flag1 != this.data.isShow){
      this.setData({
        isShow: flag1
      })
    }
    // tab导航悬停
    const flag2 = options.scrollTop >= this.data.tabFixed
    if (flag2 != this.data.isFixed) {
      this.setData({
        isFixed: flag2
      })
    }
  },

  onnavigate(){
    wx.navigateTo({
      url: '../details/details',
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
    // this._getshoushop(this.data.currtype)
    // this._getshoushop('auto')
    // this._getshoushop('dy')
    // this._getshoushop('sports')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getshoushop(this.data.currtype)
    // 加载更多的显示
    this.setData({
      isHideLoadMore: false
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})