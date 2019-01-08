// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
      restaurantName: "盛美花店",
      state: "订单取消",
      price: "15",
      date: "2019-09-14",
      time: "12:29:12",
      howToDistribute: "商家"
    }],
    categoryList: {
      page: [{
        name: "待付款",
        src: "/pages/images/5.png"
      }, {
        name: "待使用",
        src: "/pages/images/6.png"
      }, {
        name: "待评价",
        src: "/pages/images/7.png"
      }, {
        name: "退款/售后",
        src: "/pages/images/8.png"
      }]
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

  },

  onAnotherClick: function (e) {
    wx.navigateTo({
      url: '/pages/threed/threed'
    })
  }
})