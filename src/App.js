import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import ChatStickerList from "./components/ChatStickerList/ChatStickerList";

function App() {
  return (
    <Provider store={store}>
      <div>
          <ChatStickerList/>
      </div>
    </Provider>
  );
}

export default App;
