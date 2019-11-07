// pages/index/index-shop/index-shop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleimageload(){
      if (!this.data.isLoad){
        this.triggerEvent('imageload')
        this.data.isLoad = true
      }
    }
  }
})
