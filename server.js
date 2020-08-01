const express = require("express")
const server = express()
const projectRouter = require('./routers/projectRouter')

server.use(express.json())
server.use('/api/project', projectRouter)

server.get('/', (req,res) => {
    res.status(200).json({message: "Sprint Challenge Adding Data Persistence"})
})

module.exports = server