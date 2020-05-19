import {
  FETCH_CHATSTICKER_REQUEST,
  FETCH_CHATSTICKER_SUCCESS,
  FETCH_CHATSTICKER_FAILURE
} from './chatStickerTypes'

// Initial state values for chatstickerReducer
const initialState = {
  loading: false,
  chatsticker: [],
  error: ''
}

/**
 * Chatsticker reducer return state based on action
 * @param state
 * @param action
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATSTICKER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CHATSTICKER_SUCCESS:
      return {
        loading: false,
        chatsticker: action.payload,
        error: ''
      }
    case FETCH_CHATSTICKER_FAILURE:
      return {
        loading: false,
        chatsticker: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer
