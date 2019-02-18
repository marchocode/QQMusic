//歌单请求地址
var songListUrl = "https://api.bzqll.com/music/tencent/songList";
//密匙
var urlKey = 579621905;
//歌曲请求地址
var songUrl = "https://api.bzqll.com/music/tencent/song";
//歌曲搜索请求
var souUrl = "https://api.bzqll.com/music/tencent/search";

var paiUrl = "https://api.bzqll.com/music/tencent/hotSongList?key=579621905&categoryId=10000000&sortId=3&limit=13";

var mvUrl = "https://api.bzqll.com/music/tencent/hotMvList";

var mvDetail = "https://api.bzqll.com/music/tencent/mv";

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