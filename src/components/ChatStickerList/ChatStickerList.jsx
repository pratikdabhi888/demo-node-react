import * as React from 'react';
import { connect } from 'react-redux'
import {fetchChatSticker} from '../../redux/chatsticker/chatStickerServices';


class ChatStickerList extends React.Component {

 componentDidMount() {
   const { fetchChatSticker } = this.props;
   fetchChatSticker();
 }

 render() {

   const {  chatsticker, fetchChatSticker} = this.props;

   const data = chatsticker.chatsticker.map(sticker => <div key={sticker._id}>
     <img src={sticker._source.thumb} alt={sticker._source.name}/>
      <h3>{sticker._source.name}</h3>
     <h4>{sticker._source.description}</h4>
     <h4>{sticker._source.author}</h4>
     <hr/>
   </div>)
   return <div>

     <label htmlFor="term">Choose a Term:</label>
     <select onChange={(e) => fetchChatSticker(e.target.value) }>
       <option value="">Select Option</option>
       <option value="dog">Dog</option>
       <option value="cat">Cat</option>
     </select>

     {!chatsticker.loading ? data : <h1>Loading....</h1>}
   </div>
 }
}

const mapStateToProps = state => {
  return {
    chatsticker: state.chatsticker
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChatSticker: (term) => dispatch(fetchChatSticker(term))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatStickerList)
