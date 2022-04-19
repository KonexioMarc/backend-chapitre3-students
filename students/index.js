const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


const students = [
    "toto",
    "tata",
    "john"
]

app.get('/students', (req, res) => {
    res.json(students) // => ["toto", "tata", "john"]
    // res.json({ students }) // => {students: ["toto", "tata", "john"]}
    // res.json({ students: students }) // => {students: ["toto", "tata", "john"]}
})

app.post('/students', (req, res) => {
    console.log('[POST] /students, req.body', req.body)
    students.push(req.body.name)
    res.send('ok')
})


app.listen(port, () => {
    console.log('the server is ready at port', port)
})