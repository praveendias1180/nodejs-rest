const express = require('express')
const app = express()

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

app.get('/',  (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses/',  (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id/', (req, res) => {
    res.send(courses[req.params.id])
})

// export PORT=3400
// set PORT=3400
const port = process.env.PORT || 3300
app.listen(port, () => console.log(`Listening on port ${port}...`))