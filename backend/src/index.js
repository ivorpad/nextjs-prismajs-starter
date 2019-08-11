const createServer = require('./createServer');
const cookieParser = require('cookie-parser')
const server = createServer()
const {verify} = require('jsonwebtoken')

server.express.use(cookieParser())

// server.express.use((req, res, next) => {
//   const { token } = req.cookies;
//   if (token) {
//     const { user_id } = verify(token, process.env.JWT_SECRET);
//     // put the userId onto the req for future requests to access
//     req.user_id = user_id;
//   }
//   console.log(token)
//   next();
// });

server.start({port: 4545, cors: { 
  credentials: true,
  origin: ["http://localhost:4545", "http://localhost:3000"] 
}}, ({port}) => console.log(`Server is running on http://localhost:${port}`))