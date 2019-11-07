// components/w-swiper/w-swiper.js
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
    imgurl: ['http://img1.imgtn.bdimg.com/it/u=3428466201,621755416&fm=26&gp=0.jpg', 'http://bpic.588ku.com/back_pic/17/05/15/91f9419e062608c137a7ce9a4e797671.jpg', 'http://img4.cache.netease.com/photo/0001/2009-10-22/5M7N6DQM00AQ0001.jpg']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigate(){
      this.triggerEvent('navigate')
    }
  }
})
