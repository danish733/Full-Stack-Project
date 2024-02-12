// index.js

const express = require('express');
const connection = require('./database/db');
const  defaultData  = require('./default');
const {router} = require('./routes/route')
const cors = require('cors')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;


app.use(cors())
app.use(express.json())
app.use('/', router)

connection();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

defaultData();
