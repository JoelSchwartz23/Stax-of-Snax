let expressSession = require('express-session')
let MongoStore = require('connect-mongodb-session')(expressSession)


let store = new MongoStore({
  uri: 'mongodb://admin:teamfruitsnax4@ds028559.mlab.com:28559/stax-o-snax',
  collection: "Sessions"
})

store.on('error', error => {
  console.error('[SESSION ERROR]', error)
})

let session = expressSession({
  secret: process.env.SESSSIONSECRET || "It's a secret for everybody",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  },
  store,
  resave: true,
  saveUninitialized: true
})


module.exports = session