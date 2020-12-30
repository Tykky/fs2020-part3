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

app.get('/api/persons', (request, response) => 
    Person.find({}).then(persons => 
        response.json(persons)))

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(person => response.json(person))
    .catch(error => next(error))
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

app.put('/api/persons/:id', (request, response) => {
    const person = request.body 

    const Person = {
        name: person.name,
        number: person.number,
        id: Number(request.params.id)
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true})
        .then(updatedPerson => {
            response.json(updatePerson)
        })
        .catch(error => next(error))
})


app.post('/api/persons/', (request, response) => {

    const id = Math.floor(Math.random()*1000)

    const body = request.body
    body.id = id

    if (!body.name || body.name === '' || !body.number || body.number === '') {
        return response.status(400).json({error: 'name or number missing'})
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