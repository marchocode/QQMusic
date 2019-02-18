// pages/mvPlay/mvPlay.js

var imp = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    MV:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var id = options.id;

    wx.showLoading({
      title: '正在加载',
      
    })
    var temp = this;
    wx.request({
      url: imp.mvDetail,
      data: {
        key: 579621905,
        id: id
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        //console.log(res.data.data);
        temp.setData({
          MV:res.data.data
        })
      },
      
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading();
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