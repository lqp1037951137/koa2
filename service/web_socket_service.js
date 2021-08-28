const WebSocket = require('ws')
const path = require('path')
const fileUtils = require('../utils/file_utils')
const wss = new WebSocket.Server({
  port: 9998
})

module.exports.listen = () => {
  wss.on('connection', client => {
    client.on('message', async msg => {
      console.log(msg.toString('utf-8'));
      let payload = JSON.parse(msg);
      const action = payload.action
      if (action === 'getData') {
        let filePath = '../data/' + payload.chartName + '.json'
        filePath = path.join(__dirname, filePath)
        const ret = await fileUtils.getFileJsonData(filePath)
        payload.data = ret
        client.send(JSON.stringify(payload))
      } else {

        wss.clients.forEach(client => {
          client.send(msg.toString('utf-8'))
        })
      }
      //client.send('hello socket')
    })
  })
}