let express = require('express')
let bodyParser = require('body-parser')
require('./server/db/mlab-config')

let server = express()
const PORT = 9001


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

//Auth routes
// let auth = require('./server/auth/routes')
// server.use(auth.session)
// server.use('/account', auth.router)

//Allow users to get data when not logged in
server.use("*", (req, res, next) => {
  if (req.method == "GET") {
    return next()
  }
  if (!req.session.uid) {
    return next(new Error("Please login to continue"))
  }
  if (req.method == "POST") {
    req.body.creatorId = req.session.uid
  }
  next()
})













server.listen(PORT, () => { console.log("the server is running on port: ", PORT) })


server.use('*', (error, req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})