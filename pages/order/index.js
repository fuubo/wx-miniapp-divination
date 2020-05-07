Page({
  data: {
    selected: 1,
    categories: [
      {
        id: 1,
        name: "占卜"
      },
      {
        id: 2,
        name: "占星"
      }
    ],
    scrolltop: 0,
    goods: [
      {
        name:"占卜",
        minutes: 30,
        price: 100,
        id: 1,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 2,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 3,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 4,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 5,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 6,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 7,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 8,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 9,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 10,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 11,
        categoryId: 1
      }, {
        name:"占卜",
        minutes: 60,
        price: 180,
        id: 12,
        categoryId: 1
      }, {
        name:"占星",
        minutes: 30,
        price: 200,
        id: 13,
        categoryId: 2
      }
    ]
  },

  onLoad: function () {

  },
  onCategoryClick: function (e) {
    var that = this;
    var id = e.target.dataset.id;
    if (id === that.data.selected) {
      that.setData({
        scrolltop: 0,
      })
    } else {
      that.setData({
        selected: id,
        scrolltop: 0
      });
    }
  },
  onOrderBtnClick: function(e){
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000
    })
  }
})
