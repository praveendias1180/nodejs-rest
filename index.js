const express = require('express')
const app = express()

app.get('/',  (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses/',  (req, res) => {
    res.send('Course List')
})

app.listen(3300, () => console.log('Listening on port 3300...'))