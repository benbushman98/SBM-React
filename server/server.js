const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4100;
const app = express();

//MIDDLEWARE FOR POST & PUT REQUESTS 
//because we are sending data & asking the server to accept or store 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/build'));
//MIDDLEWARE FOR IMAGES FROM CLIENT FOLDER
app.use('/images', express.static(path.join(__dirname, '../client/images')));

//WHEN IN PRODUCTION, USE CLIENT BUILD FOLDER
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//GET REQUEST FOR INDEX.HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
  console.log(`⚡️ Running on port http://localhost:${PORT} ⚡️`);
})


