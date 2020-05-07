//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "../images/swiper-1.jpg",
      "../images/swiper-1.jpg",
      "../images/swiper-1.jpg"
    ],
    currentIndex:0
  },
  
  onLoad: function () {
    
  },
  swiperChange(e){
    console.log(e)
    this.setData({
      currentIndex:e.detail.current
    })
  },
})
