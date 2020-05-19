import { combineReducers } from 'redux'
import chatStickerReducer from './chatsticker/chatStickerReducer'

// Register all reducer
const rootReducer = combineReducers({
  // chatsticker reducer state
  chatsticker: chatStickerReducer
})

export default rootReducer
