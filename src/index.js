import express from 'express';
import morgan from 'morgan';
import routers from './router/index'

import sequelize from './database/database';
require("@babel/polyfill");
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api',routers);

process.env.PORT = process.env.PORT || 8000

app.listen(process.env.PORT,()=>{
    console.log(`PORT : ${process.env.PORT}`);
    sequelize.sync({force:false}).then(()=>{console.log("bd conectada")});
});