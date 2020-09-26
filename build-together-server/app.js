
const express = require('express')
const bodyPaser = require('body-parser')
const path = require('path')

const app = express()


// to give the frontend and the backendthe same origin (domin, server, etc...)
//  This will allow any request from any origin to access our API
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// use body parser
app.use(bodyPaser.json())

app.use('static/img', express.static(path.join(__dirname, 'static/img')))
.get('/', (req, res) => {
    res.send('GoodBye friend')
})


module.exports = app