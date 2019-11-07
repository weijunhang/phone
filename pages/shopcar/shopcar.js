// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ischoose:false,
    isquanxuan:false,

    num: 10,
    kucun: 20,
    isjianku: false,
    isjiaku: false,
  },


  handlechoose(){
    this.setData({
      ischoose: !this.data.ischoose
    })
  },
  handlequan(){
    if (this.data.isquanxuan == true){
      this.setData({
        isquanxuan: !this.data.isquanxuan,
        ischoose: false
      })
    }else{
      this.setData({
        isquanxuan: !this.data.isquanxuan,
        ischoose: true
      })
    }
    
  },

  handlejian() {
    if (this.data.num == 0) {
      this.setData({
        isjianku: true
      })
    } else {
      this.setData({
        num: this.data.num - 1,
        isjiaku: false
      })
    }
  },
  handlejia() {
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