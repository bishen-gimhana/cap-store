const express= require('express')
const path =require('path');
const config = require('./config');
const logger = require('morgan');
const bodyPasser =require('body-Parser');
const cors = require('cors');
const helmet= require('helmet');
const routes = require('../routes');
const passport =require('../middleware/passport');

//
const app = express();
//
if (config.env === 'development'){
  app.use(logger('dev'));
}
const distDir = path.join(__dirname, '../../dist');
app.use(express.static(distDir));


app.use(bodyPasser.json());
app.use(bodyPasser.urlencoded({extened:true}));


app.use(helmet());

app.use(cors());

app.use(passport.initialize()); 

app.use('/api/',routes);

app.get('*',(req,res) => res.sendFile(path.join(distDir,'index.html')));

module.exports=app;

