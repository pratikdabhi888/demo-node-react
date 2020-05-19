import {
  FETCH_CHATSTICKER_REQUEST,
  FETCH_CHATSTICKER_SUCCESS,
  FETCH_CHATSTICKER_FAILURE
} from './chatStickerTypes'

/**
 * fetch chatsticker action
 * @returns {{type: string}}
 */
export const fetchChatStickerRequest = () => {
  return {
    type: FETCH_CHATSTICKER_REQUEST
  }
}

/**
 * fetch chatsticker success action
 * @param users
 * @returns {{payload: *, type: string}}
 */
export const fetchChatStickerSuccess = sticker => {
  return {
    type: FETCH_CHATSTICKER_SUCCESS,
    payload: sticker
  }
}

/**
 * fetch chatsticker data fail action
 * @param error
 * @returns {{payload: *, type: string}}
 */
export const fetchChatStickerFailure = error => {
  return {
    type: FETCH_CHATSTICKER_FAILURE,
    payload: error
  }
}
