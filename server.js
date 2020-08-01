const express = require("express")
const server = express()

server.use(express.json())

server.get('/', (req,res) => {
    res.status(200).json({message: "Sprint Challenge Adding Data Persistence"})
})

module.exports = server