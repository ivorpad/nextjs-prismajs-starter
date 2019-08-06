const createServer = require('./createServer');
const cookieParser = require('cookie-parser')
const server = createServer()

server.express.use(cookieParser())

server.start({port: 4545, cors: { 
  credentials: true,
  origin: ["http://localhost:4545", "http://localhost:3000"] 
}}, ({port}) => console.log(`Server is running on http://localhost:${port}`))