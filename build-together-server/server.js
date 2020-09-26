const http = require('http')
const app = require('./app')

const port = process.env.PORT || 3000,
     hostname = '127.0.0.1'



app.set('port', port)
app.set('hostname', hostname)

const server = http.createServer(app)

server.listen(port, hostname, () => 
console.log(`${'<'.repeat(10)} server is runing at http://${hostname}:${port} ${'>'.repeat(10)} `))