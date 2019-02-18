// pages/mv/mv.js

var imp = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvList:[],
    offset:0,//分页
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var temp = this;

    wx.showLoading({
      title: '正在加载',
    })

    wx.request({
      url: imp.mvUrl,
      data:{
        key:imp.urlKey,
        year:0,
        tag:0,
        area:0,
        limit:10,
        offset: temp.data.offset
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        
        temp.setData({
          mvList:res.data.data
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

  jumpMvPlay:function(res){
   
    var id = res.currentTarget.id;
    wx.navigateTo({
      url: '../mvPlay/mvPlay?id=' + id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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
    //下拉刷新
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

      var temp = this;

      this.setData({
        offset: temp.data.offset+1
      })

      wx.showLoading({
        title: '正在加载',
      })
      wx.request({
        url:imp.mvUrl ,
        data: {
          key: imp.urlKey,
          year: 0,
          tag: 0,
          area: 0,
          limit: 10,
          offset: temp.data.offset
        },
        
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var lists = temp.data.mvList.concat(res.data.data);
          //下拉到底后再次请求到数据
          temp.setData({
            mvList: lists
          })
        },
        fail: function(res) {},
        complete: function(res) {
          wx.hideLoading();
        },
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})