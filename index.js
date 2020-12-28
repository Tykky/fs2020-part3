const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())

morgan.token('content', request => 
    JSON.stringify(request.body)
)

app.use(morgan(':method :url :status :res[content-length] :response-time ms :content'))

let notes = [
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

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})

app.get('/info', (request, response) =>
    response.send(`Phonebook has info for ${notes.length} people <br/><br/>
    ${Date()}`))


app.post('/api/persons/', (request, response) => {

    const id = Math.floor(Math.random()*1000)

    const note = request.body
    note.id = id

    if (!note.name || note.name === '' || !note.number || note.number === '') {
        return response.status(400).json({error: 'name or number missing'})
    }

    if (notes.find(n => n.name === note.name)) {
        return response.status(400).json({error: `${note.name} already exists in the phonebook`})
    }

    notes = notes.concat(note)

    response.json(note)
})

const PORT = 3001
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`))