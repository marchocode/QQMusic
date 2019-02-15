// pages/sou/sou.js
var impl = require("../../utils/util.js")
var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    souContent:"",
    songs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  navtoplay:function(e){
    //点击跳转播放页面
    var index = e.currentTarget.id;

    wx.navigateTo({
      url: '../play/play?index='+index,
      
    })


  },
  inputOver:function(e){
    this.setData({
      souContent:e.detail.value
    })
  },
  startFind:function(){

    /**
     * 点击开始搜索，发送请求，返回搜索结果
     */

    wx.showLoading({
      title: '正在搜索',
    })
    
    var temp = this;
    wx.request({
      url: impl.souUrl,
      data: {
        key:impl.urlKey,
        s: temp.data.souContent,
        type:"song",
        limit:10
      },
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        wx.hideLoading();//隐藏搜索图标

        app.sings = res.data.data;//赋值

        temp.setData({
          songs:res.data.data
        })

      },
      fail: function(res) {

      },
      complete: function(res) {

      },
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