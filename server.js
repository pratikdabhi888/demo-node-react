const express = require('express')
const path = require('path');
const cors = require('cors');
const axios = require('axios'); 
const app = express()

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

const port = 9001;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/getStickrs', (req, res) => {
    let endpoint = `https://chatsticker.com/?apiKey=CbAT3TnhoE0FXAqv61hcSxNQrqlZHK0KKEAP9Vl1Yn329l6fVIftXVWKO0rIKuXPN8MdraQLb6aN4kFrMyR7CjE67PGPfZPz4830VgmxMRZbI5YxMRH8ZtW2Z9AbjhdI`;
   return axios.get(endpoint,  { headers:  { 'Content-Type': 'application/json' } }).then(stickerRes => res.send(stickerRes.data));
})

app.get('/getStickrs/:term', (req, res) => {
    let endpoint = `https://chatsticker.com/?apiKey=CbAT3TnhoE0FXAqv61hcSxNQrqlZHK0KKEAP9Vl1Yn329l6fVIftXVWKO0rIKuXPN8MdraQLb6aN4kFrMyR7CjE67PGPfZPz4830VgmxMRZbI5YxMRH8ZtW2Z9AbjhdI`;
    if(req.params.term) {
        endpoint += `&term=${req.params.term}`;
    }
   return axios.get(endpoint,  { headers:  { 'Content-Type': 'application/json' } }).then(stickerRes => res.send(stickerRes.data));
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))