import express from 'express';
import morgan from 'morgan';
import routers from './router/index'
require("@babel/polyfill");
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api',routers);

app.listen(8000,()=>{
    console.log('se esta usando el puerto 3000');
});