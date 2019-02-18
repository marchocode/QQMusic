// pages/play/play.js

var imp = require("../../utils/util.js")
var app = getApp();


var player; //播放器对象

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sing: [],//播放列表
    index: 0,//当前下标
    songs:{},//当前播放对象
    show: true,
    isPlay: true,
    downProgress: "0",
    playProgress:"0",
    songLenth:0,
    LrcArray:[],
    LrcArrayIndex:0,//歌词数组指针
    lrcContext:""//歌词内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    this.setData({
      index: options.index,//下标
      sing: app.sings,//播放列表
      songs: app.sings[options.index]//正在播放的歌曲
    })


    //console.log(this.data.songs);

    //请求歌词
    this.loadLrc();

    wx.showLoading({
      title: '正在加载',
    })
    

  },
  //加载歌词
  loadLrc:function(){

    var array = new Array();
    var temp = this;
    wx.request({
      url: temp.data.songs.lrc,
      method: 'GET',
      dataType: '其他',
      success: function(res) {
        
        var arr = res.data.split("\n");

        var LrcArray = arr.slice(arr.indexOf("[offset:0]")+1);
        
        console.log(LrcArray);
        LrcArray.forEach(function (item) {
          //遍历数组

          var t = item.substring(item.indexOf("[") + 1, item.indexOf("]"));
          array.push({
            //歌词处理放入对象数组；
            t: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
            c: item.substring(item.indexOf("]") + 1, item.length)
          });


        });

        temp.setData({

          LrcArray: array

        })



      }
    })


    
   
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.hideLoading();
    this.setData({
      show:false
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
    //是否已经创建
    if (player != null) {
      player.src = this.data.songs.url;
      player.play();//直接开始播放
      
      
    } else {
      player = wx.createInnerAudioContext();
      player.src = this.data.songs.url;
      player.play();//直接开始播放
    }
    
    

    var temp = this;

    player.onPlay(function () {
      //监听播放事件
      temp.setData({
        isPlay: false //切换css
      })

    });
    player.onPause(function () {
      //监听暂停

      temp.setData({
        isPlay: true //切换css
      })

    });

    

    player.onTimeUpdate(function(){
      //监听播放进度改变
      //计算百分百，改变进度条进度
      
      var len = player.duration.toFixed(3);//总秒数,保留三位小数
      
      var inde = player.currentTime.toFixed(3);//当前秒
      
      var bfb = (inde/len)*100;//百分比




      if (inde >= temp.data.LrcArray[temp.data.LrcArrayIndex].t) {
          temp.setData({

            lrcContext: temp.data.LrcArray[temp.data.LrcArrayIndex].c,
            LrcArrayIndex: temp.data.LrcArrayIndex+1
          })

      }

      temp.setData({
        playProgress: bfb,
        songLenth: len
      })
    });


    player.onEnded(function(){
      //音频播放自然结束
      //切换下一首
      temp.nextPlay();
    });

   

  },
  playmusic: function() {
    //当播放/暂停按下后

    if (this.data.isPlay) {

      player.play(); //播放音频
    } else {

      player.pause(); //暂停播放
    }

  },
  jumpToTime:function(e){
    //跳转到指定的位置播放

    var ind = e.detail.value;//跳转的位置
    var len = this.data.songLenth;//歌曲长度
    var to = ind / 100 * len;
    player.seek(to);
  },

  lastPlay:function(){
    /**
     * 上一曲
     */
    var index = this.data.index;//当前播放下标
    var sing = this.data.sing;//当前播放列表
    if (index >0) {
      this.setData({
        index : --index,
        songs: sing[index]
      })
    }


    player.src = this.data.songs.url;
    player.play();//播放

  },
  nextPlay:function(){
    /**
     * 下一曲
     */

    var index = this.data.index;//当前播放下标
    var sing = this.data.sing;//当前播放列表
    if (index <sing.length) {
      this.setData({
        index: ++index,
        songs: sing[index]
      })
    }

    player.src = this.data.songs.url;
    player.play();//播放


  },

  downsong: function() {
    //下载文件到本地

    var temp = this;
    var filePath;


    const downer = wx.downloadFile({
      url: temp.data.sing.url,
      success: function(res) {
        //下载成功
        filePath = res.tempFilePath;
        //保存临时文件到目录里
        console.log("11" + filePath)


        wx.saveFile({
          tempFilePath: filePath,
          success: function(res) {
            //成功保存到本地
            console.log("22" + res.savedFilePath);
          },
          fail: function(res) {
            console.log("err")
          },
          complete: function(res) {

          },
        })




      },
      fail: function(res) {

      },
      complete: function(res) {

      },
    });
    downer.onProgressUpdate((res) => {

      this.setData({
        downProgress: res.progress
      })
    })

  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})