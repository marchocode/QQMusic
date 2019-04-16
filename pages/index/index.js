
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    swiperItem:[
      "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1118162.jpg?max_age=2592000",
      "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1118392.jpg?max_age=2592000",
      "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1118604.jpg?max_age=2592000"
    ],
    singList:[
      {
        id:"6208541923",
        pic:"https://p.qpic.cn/music_cover/gaSSCRswoq7NlpHA8vK1PvAAGG88t8D82bsl7yQAUsnaZZzURHaapA/300?n=1",
        title:"2018年度综艺热歌",

      },
      {
        id: "4190668670",
        pic: "https://p.qpic.cn/music_cover/Epqq26mXexIV5ibAPicN4vMhXu34uKYylYLJzAku6EPdnRWoZNicRX5dw/300?n=1",
        title: "民谣里的现代诗",

      },
      {
        id: "6042842403",
        pic: "https://p.qpic.cn/music_cover/gaSSCRswoq7NlpHA8vK1PvAAGG88t8D8fTOCjjpeeibolw1Oku5vCsQ/300?n=1",
        title: "2018年度影视热歌",

      },
    ]

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
  taptoLists:function(e){
    //跳转页面，传递参数
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../showlist/showlist?id='+id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})