const express = require('express')
const app = express()

app.use(express.json())

const notes = [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
    ]

app.get('/api/persons', (request, response) => 
    response.json(notes))

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(n => n.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) =>
    response.send(`Phonebook has info for ${notes.length} people <br/><br/>
    ${Date()}`))

const PORT = 3001
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`))