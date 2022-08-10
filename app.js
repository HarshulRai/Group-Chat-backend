require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const sequelize = require('./util/database')

const userRoutes = require('./routes/user')
const messageRoutes = require('./routes/message')

const User = require('./models/user')
const Message = require('./routes/message')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(userRoutes)
app.use(messageRoutes)

// User.hasMany(Message)
// Message.belongsTo(User)

sequelize.sync()
.then((res)=>{
    //console.log(res)
    app.listen(3000)
}).catch(err=>console.log(err))