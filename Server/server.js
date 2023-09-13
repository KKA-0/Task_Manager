const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./Routers/crudRoute')
const port = 6969

app.use(bodyParser.json())
app.use(cors())
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);
const DB = "mongodb+srv://admin:admin123@cluster0.un0qo4j.mongodb.net/";
mongoose.connect(DB, {})
    .then(() => console.log("Connected to the DataBase 🧬"))
    .catch((err) => console.log(err));

app.use(morgan('dev'));

app.use('/api', router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
