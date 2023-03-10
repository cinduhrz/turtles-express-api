// import dependencies
const express = require("express")


// create express App object
const app = express()

// The Data
const turtles = [
    {name: "Leonardo", role: "ninja"},
    {name: "Michaelangelo", role: "ninja"},
    {name: "Donatello", role: "ninja"},
    {name: "Raphael", role: "ninja"},
]

// middleware
app.use(express.json()) // req.body json parser (need for post requests to accept json data from client)


// register routes
app.get('/', (req, res) => {
    res.json({
        response: "hello world"
    })
})

// Index Route
app.get('/turtles', (req, res) => {
    res.json(turtles)
})

// Delete Route
app.delete('/turtles/:index', (req, res) => {
    turtles.splice([req.params.index], 1)
    res.json(turtles)
})

// Update Route
app.put("/turtles/:index", (req, res) => {
    turtles[req.params.index] = req.body
    res.json(turtles)
})

// Create Route
app.post('/turtles', (req, res) => {
    turtles.push(req.body)
    res.json(turtles)
})

// Show Route
app.get('/turtles/:index', (req, res) => {
    res.json(turtles[req.params.index])
})


// turn server on
app.listen(3005, () => {
    console.log(`Listening on port 3005`)
})