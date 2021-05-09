const dotEnv = require('dotenv');
const express = require('express');

dotEnv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes'));

app.listen(3000, console.log('server runing port' + 3000));