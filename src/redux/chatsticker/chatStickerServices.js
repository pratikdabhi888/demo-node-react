import axios from 'axios';
import {
  fetchChatStickerFailure,
  fetchChatStickerRequest,
  fetchChatStickerSuccess,
} from './chatStickerActions';

const BASE_URL = process.env.REACT_APP_BASE_URL;

/**1
 * get chatsticker api
 * @returns {function(...[*]=)}
 */
export const fetchChatSticker = (term) => {
  return (dispatch) => {
    dispatch(fetchChatStickerRequest())
    let endPoint = term ? `${BASE_URL}getStickrs/${term}` :  `${BASE_URL}getStickrs`
    axios
      .get(endPoint,
        { headers: { 'Content-type': 'application/json' } })
      .then(response => {
        // response.data is the chatSticker
        const chatSticker = response.data.data
        dispatch(fetchChatStickerSuccess(chatSticker))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchChatStickerFailure(error.message))
      })
  }
}
