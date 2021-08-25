const Koa = require('koa');

const app = new Koa()
const resDurationMiddleWare = require('./middleware/koa_response_duration')
app.use(resDurationMiddleWare)

const resHeaderMiddleWare = require('./middleware/koa_response_header')
app.use(resHeaderMiddleWare)

const resDataMiddleware = require('./middleware/koa_response_data')
app.use(resDataMiddleware)


app.listen(8888)