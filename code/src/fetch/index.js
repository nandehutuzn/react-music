import { fetchApi, fetchJsonp } from './fetch'
import { JSONP_URL, JSONP_PARAMS, JSONP_OPTIONS } from './config'

export default {
    /**
     * 获取首页推荐轮播信息
     */
    getRecommend () {
        let params = Object.assign({}, JSONP_PARAMS, {
            platform: 'h5',
            uin: 772528797,
            needNewCode: 1,
            _: new Date().getTime()
        })

        return fetchJsonp(JSONP_URL.recommend, JSONP_OPTIONS, params)
    },

    /**
     * 获取最新专辑
     */
    getLatestAlbum () {
        let albumlib = {
            method: 'get_album_by_tags',
            param: {
                area: 7,
                company: -1,
                genre: -1,
                type: -1,
                year: -1,
                sort: 2,
                get_tags: 1,
                sin: 0,
                num: 50,
                click_albumid: 0
            },
            module: 'music.web_album_library'
        }
        let data = Object.assign({}, JSONP_PARAMS, {
            hostUin: 0,
            platform: 'yqq',
            needNewCode: 0,
            data: `{
                    "albumlib": ${JSON.stringify(albumlib)}
                }`
        })
        let option = {
            param: 'callback',
            prefix: 'callback'
        }

        return fetchJsonp(JSONP_URL.latestAlbum, option, data);
    },

    /**
     * 获取专辑详情
     * @param {} albumId 
     */
    getAlbumInfo(albumId) {
        let data = Object.assign({}, JSONP_PARAMS, {
            g_tk: 33480508,
            albummid: albumId,
            hostUin: 0,
            platform: "yqq",
            needNewCode: 0
        })

        return fetchJsonp(JSONP_URL.albumInfo, JSONP_OPTIONS, data);
    },

    /**
     * 获取推荐歌单
     */
    getPlayList(){
        let playList = {
            comm: {
              ct: 24
            },
            recomPlaylist: {
              method: 'get_hot_recommend',
              param: {
                async: 1,
                cmd: 2
              },
              module: 'playlist.HotRecommendServer'
            }
        }
        let data = Object.assign({}, JSONP_PARAMS, {
            callback: 'recom46834914305012054',
            g_tk: 1492455586,
            jsonpCallback: 'recom46834914305012054',
            loginUin: 772528797,
            hostUin: 0,
            platform: 'yqq',
            needNewCode: 0,
            data: JSON.stringify(playList)
        })

        return fetchJsonp(JSONP_URL.playList, {}, data);
    },

    /**
     * 获取歌单详情
     * @param {*} id 
     * @param {*} pageIndex 
     */
    getPlayListInfo (id, pageIndex = 0) {
        let params = Object.assign({}, JSONP_PARAMS, {
            format: 'json',
            uin: 772528797,
            platform: 'h5',
            needNewCode: 1,
            new_format: 1,
            pic: 500,
            disstid: id,
            type: 1,
            json: 1,
            utf8: 1,
            onlysong: 0,
            picmid: 1,
            nosign: 1,
            song_begin: pageIndex,
            song_num: 15,
            _: new Date().getTime()
        })

        return fetchApi('/proxyApi/getPlayListInfo', params)
    },

    /**
     * 获取排行榜
     */
    getRankList () {
        let params = Object.assign({}, JSONP_PARAMS, {
            g_tk: 5381,
            uin: 0,
            notice: 0,
            platform: 'h5',
            needNewCode: 1,
            _: new Date().getTime()
        })

        return fetchJsonp(JSONP_URL.rankList, JSONP_OPTIONS, params)
    },

    /**
     * 排行榜详情
     * @param {*} id 
     */
    getRankInfo (id) {
        let params = Object.assign({}, JSONP_PARAMS, {
            g_tk: 958374854,
            uin: 0,
            notice: 0,
            platform: 'h5',
            needNewCode: 1,
            tpl: 3,
            page: 'detail',
            type: 'top',
            topid: id,
            _: new Date().getTime()
        })

        return fetchJsonp(JSONP_URL.rankInfo, JSONP_OPTIONS, params)
    },

    /**
     * 获取歌手列表
     * @param {*} pageNum 
     * @param {*} key 
     */
    getSingerList (pageNum, key) {
        let params = Object.assign({}, JSONP_PARAMS, {
            g_tk: 958374854,
            uin: 0,
            notice: 0,
            loginUin: 0,
            hostUin: 0,
            platform: "yqq",
            needNewCode: 0,
            channel: "singer",
            page: "list",
            key: key,
            pagenum: pageNum,
            pagesize: 100
        })
        let option = {
            param: "jsonpCallback",
            prefix: "GetSingerListCallback"
        }

        return fetchJsonp(JSONP_URL.singerList, option, params)
    },

    /**
     * 获取歌手详情
     * @param {*} id 
     * @param {*} pageIndex 
     */
    getSingerInfo (id, pageIndex) {
        let params = Object.assign({}, JSONP_PARAMS, {
            singerid: id,
            g_tk: 5381,
            uin: 0,
            format: 'jsonp',
            notice: 0,
            platform: 'h5page',
            needNewCode: 1,
            order: 'listen',
            from: 'h5',
            num: 15,
            begin: pageIndex,
            _: new Date().getTime()
        })

        return fetchJsonp(JSONP_URL.singerInfo, JSONP_OPTIONS, params)
    },

    /**
     * 获取歌曲vkey
     * @param {*} mid 
     */
    getSongVkey (mid) {
        let params = Object.assign({}, JSONP_PARAMS, {
            g_tk: 1722049047,
            loginUin: 772528797,
            hostUin: 0,
            platform: 'yqq',
            needNewCode: 0,
            cid: 205361747,
            uin: 772528797,
            songmid: mid,
            filename: `C400${mid}.m4a`,
            guid: 3030549298,
        })
        let option = {
            param: "callback",
            prefix: "callback"
        }

        return fetchJsonp(JSONP_URL.songVkey, option, params)
    },

    /**
     * 获取歌词
     * @param {*} mid 
     */
    getSongLyric (mid) {
        let params = Object.assign({}, JSONP_PARAMS, {
            callback: 'MusicJsonCallback_lrc',
            pcachetime: new Date().getTime(),
            songmid: mid,
            // g_tk: 5381,
            jsonpCallback: 'MusicJsonCallback_lrc',
            loginUin: 0,
            hostUin: 0,
            format: 'json',
            platform: 'yqq',
            needNewCode: 0,
        })

        return fetchApi('/proxyApi/getSongLyric', params)
    },

    /**
     * 获取热搜
     */
    getHotKey () {
        let params = Object.assign({}, JSONP_PARAMS, {
            g_tk: 5381,
            uin: 0,
            notice: 0,
            platform: 'h5',
            needNewCode: 1,
            _: new Date().getTime()
        })

        return fetchJsonp(JSONP_URL.hotKey, JSONP_OPTIONS, params)
    },

    /**
     * 搜索
     * @param {*} key 
     * @param {*} page 
     */
    searchByKey (key, page) {
        let params = Object.assign({}, JSONP_PARAMS, {
            g_tk: 5381,
            uin: 0,
            notice: 0,
            platform: 'h5',
            needNewCode: 1,
            w: key,
            zhidaqu: 1,
            catZhida: 1,
            t: 0,
            flag: 1,
            ie: 'utf-8',
            sem: 1,
            aggr: 0,
            perpage: 20,
            n: 20,
            p: page,
            remoteplace: 'txt.mqq.all',
            _: new Date().getTime()
        })

        return fetchJsonp(JSONP_URL.search, JSONP_OPTIONS, params)
    }
}