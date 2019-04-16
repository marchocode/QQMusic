//歌单请求地址
var songListUrl = "https://api.bzqll.com/music/tencent/songList";
//密匙
var urlKey = 579621905;
//歌曲请求地址
var songUrl = "https://api.bzqll.com/music/tencent/song";
//歌曲搜索请求
var souUrl = "https://api.bzqll.com/music/tencent/search";
//排行耪请求
var paiUrl = "https://api.bzqll.com/music/tencent/hotSongList";
//MV请求
var mvUrl = "https://api.bzqll.com/music/tencent/hotMvList";
//MV详情
var mvDetail = "https://api.bzqll.com/music/tencent/mv";

var test =  "123";
var test1 = "234";
//暴露变量
module.exports = {
  songListUrl: songListUrl,
  urlKey: urlKey,
  songUrl: songUrl,
  souUrl: souUrl,
  paiUrl: paiUrl,
  mvUrl:mvUrl,
  mvDetail: mvDetail
}

export {test,test1} ;