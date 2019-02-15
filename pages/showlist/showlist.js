// pages/showlist/showlist.js
var imp = require("../../utils/util.js")
var app = getApp();//app实例


Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    //播放列表
    singlist:[],
    //标题
    title:"",
    //作者
    author:"",
    
    logo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    wx.showLoading({
      title: '正在加载',
    })
    var sing = this;
    wx.request({
      url: imp.songListUrl,
      data: {
        key:imp.urlKey,
        id: id
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        //成功回调
        sing.setData({
          singlist:res.data.data.songs,
          isShow:false,
          title:res.data.data.title,
          author:res.data.data.author,
          logo:res.data.data.logo
        })

        app.sings = res.data.data.songs;//全部播放列表

        // console.log(sing.data.singlist)
      },
      fail: function(res) {

      },
      complete: function(res) {
        //总会回调
        wx.hideLoading();
        // console.log(imp)
      },
    })
    

    

  },
  navtoplay:function(e){
    let index = e.currentTarget.id;//歌曲id

      //跳转到播放页面
    wx.navigateTo({
      url: '../play/play?index='+index,
      success: function(res) {
        
      },
      fail: function(res) {

      },
      complete: function(res) {


      },
    })
    console.log()
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