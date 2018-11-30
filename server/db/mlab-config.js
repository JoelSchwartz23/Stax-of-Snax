const mongoose = require('mongoose')
const connectionString = 'mongodb://admin:teamfruitsnax4@ds028559.mlab.com:28559/stax-o-snax'
const connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})