'use strict';
// 
const Koa = require('koa');
const controller = require('./controllers')
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(controller());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');