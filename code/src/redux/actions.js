import { 
    SET_CURRENT_SONG,
    SET_PLAY_STATUS,
    SET_SHOW_PLAYER,
    SET_SONG_LIST,
    SET_PLAY_MODE } from './actionTypes'

/**
 * 设置当前播放歌曲
 * @param {歌曲} song 
 */
export function setCurrentSong (song) {
    return {type: SET_CURRENT_SONG, song}
}

/**
 * 设置当前歌曲播放状态
 * @param {状态} status 
 */
export function setPlayStatus (status) {
    return {type: SET_PLAY_STATUS, status}
}

/**
 * 设置播放器
 * @param {*} showPlayer 
 */
export function setShowPlayer (showPlayer) {
    return { type: SET_SHOW_PLAYER, showPlayer }
}
  
/**
 * 设置歌曲列表
 * @param {*} songList 
 */
export function setSongList (songList) {
    return { type: SET_SONG_LIST, songList }
}
  
/**
 * 设置播放模式
 * @param {*} playMode 
 */
export function setPlayMode (playMode) {
    return { type: SET_PLAY_MODE, playMode }
}