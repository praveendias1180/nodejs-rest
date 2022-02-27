const express = require('express')
const app = express()
app.use(express.json())

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
    // res.send(courses[req.params.id])
    const course = courses.find(c => c.id == parseInt(req.params.id))
    if(!course) res.status(404).send('The course not found')
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('Name not valid')
    }
    const course = {id: courses.length + 1, name: req.body.name }
    courses.push(course)
    res.send(course)
})

// export PORT=3400
// set PORT=3400
const port = process.env.PORT || 3300
app.listen(port, () => console.log(`Listening on port ${port}...`))