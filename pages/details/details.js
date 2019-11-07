// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: [
      'http://img000.hc360.cn/m6/M08/D1/23/wKhQoVU9mTmEDWAlAAAAAJfE8Tc942.jpg',                 'http://img3.imgtn.bdimg.com/it/u=1280082715,213284654&fm=26&gp=0.jpg', 'http://img004.hc360.cn/g2/M04/F1/F8/wKhQuFIDlq2EVaa7AAAAAOH--Sk411.jpg','http://img2.imgtn.bdimg.com/it/u=1840620370,21626596&fm=26&gp=0.jpg'],
    xiangUrl: ['http://img000.hc360.cn/m6/M08/D1/23/wKhQoVU9mTmEDWAlAAAAAJfE8Tc942.jpg', 'http://img3.imgtn.bdimg.com/it/u=1280082715,213284654&fm=26&gp=0.jpg', 'http://img004.hc360.cn/g2/M04/F1/F8/wKhQuFIDlq2EVaa7AAAAAOH--Sk411.jpg', 'http://img2.imgtn.bdimg.com/it/u=1840620370,21626596&fm=26&gp=0.jpg'],

   pic: 200.23,

  xin:'/assets/common/like.png',
  xinactive:'/assets/common/like-active.png',
  isXin:false,

  isYin:false,
  isTran:false,

  num:10,
  kucun:20,

  isjianku:false,
  isjiaku:false,
  },
  
  handleTan(){
    this.setData({
      isYin:!this.data.isYin,
      isTran:!this.data.isTran
    })
  },
  hideTan(){
    this.setData({
      isYin: !this.data.isYin,
      isTran: !this.data.isTran
    })
  },
  previewImage(e){
    // console.log(e)
    const currentsrc = e.currentTarget.dataset.src

    wx.previewImage({
      current: currentsrc, // 当前显示图片的http链接  
      urls: this.data.imgurl // 需要预览的图片http链接列表  
    })
  },

  xinActive(){
    this.setData({
      isXin: !this.data.isXin
    })
  },

  toCar(){
    wx.navigateTo({
      url: '../shopcar/shopcar',
    })
  },

  yiMai(){
    wx.showToast({
      title: '购买成功',
      icon:'success',
      duration:1000,
    })
  },
  jiaru(){
    wx.showToast({
      title: '添加购物车成功',
      icon: 'success',
      duration: 1000,
    })
  },
  
  handlejian(){
    if(this.data.num == 0){
      this.setData({
        isjianku : true 
      })
    }else{
      this.setData({
        num: this.data.num - 1,
         isjiaku: false
      })
    }
  },
  handlejia(){
    if (this.data.num == this.data.kucun) {
      this.setData({
        isjiaku: true
      })
    } else {
      this.setData({
        num: this.data.num + 1,
        isjianku: false 
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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