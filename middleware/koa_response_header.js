module.exports = async (ctx, next) => {
    const contentType = 'application/json; charset=UTF-8'
    ctx.set('Content-Type', contentType)
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE')
    await next()
}