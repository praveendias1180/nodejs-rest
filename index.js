const express = require('express')
const app = express()

app.get('/',  (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses/',  (req, res) => {
    res.send('Course List Display')
})

app.get('/api/courses/:id/:name', (req, res) => {
    // res.send(req.params)
    res.send(req.query)
})

// export PORT=3400
// set PORT=3400
const port = process.env.PORT || 3300
app.listen(port, () => console.log(`Listening on port ${port}...`))