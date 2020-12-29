const mongoose = require('mongoose')

const password = process.argv[2]

const url =
    `mongodb+srv://admin:${password}@cluster0.zqjye.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    id: Number
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length <= 3) {
    console.log('Phonebook:')
    Person.find({}).then(result => { 
        result.forEach(person => 
            console.log(`${person.name} ${person.number}`)
    )
    mongoose.connection.close()
    })
} else {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
        id: Math.floor(Math.random()*1000)
    })
    person.save().then(result => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        mongoose.connection.close()
    })
}