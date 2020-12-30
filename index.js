require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/person')

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] :response-time ms :content'))
app.use(cors())

morgan.token('content', request => 
    JSON.stringify(request.body)
)

let persons = [
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
    Person.find({}).then(persons => 
        response.json(persons)))

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(n => n.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})


app.get('/info', (request, response) =>
    response.send(`Phonebook has info for ${persons.length} people <br/><br/>
    ${Date()}`))


app.post('/api/persons/', (request, response) => {

    const id = Math.floor(Math.random()*1000)

    const body = request.body
    body.id = id

    console.log(body)

    if (!body.name || body.name === '' || !body.number || body.number === '') {
        return response.status(400).json({error: 'name or number missing'})
    }

    if (persons.find(n => n.name === body.name)) {
        return response.status(400).json({error: `${body.name} already exists in the phonebook`})
    }

    const person = new Person({
        name: body.name,
        number: body.number,
        id: id
    })

    person.save().then(savedPerson => 
        response.json(savedPerson))

})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
  // handler of requests with unknown endpoint
  app.use(unknownEndpoint)
  
  const errorHandler = (error, request, response, next) => {
        console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
  }
  
  // handler of requests with result to errors
  app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`))