const express = require('express')

const server = express()

server.use(express.json())

const digitadores = ['Alex', 'Saulo', 'Ewerton', 'Selma']

// Retorna um digitador 

server.get('/digitadores/:index', (req, res) => {
    const {index} = req.params
    return res.json(digitadores[index])
})

// Retornar todos os digitadores

server.get('/digitadores', (req, res) => {
    return res.json(digitadores)
})

// Criar um novo digitador

server.post('/digitadores', (req, res) => {
    const name = req.body
    digitadores.push(name)
    return res.json(digitadores)
})

// Editar um digitador

server.put('/digitadores/:index', (req, res) => {
    const {index} = req.params
    const {name} = req.body
    digitadores[index] = name
    return res.json(digitadores)
})

// Deletar um digitar

server.delete('/digitadores/:index', (req, res) => {
    const {index} = req.params
    digitadores.splice(index, 1)
    return res.json({message: "O digitador foi deletado"})
})


server.listen(3000)
console.log("Servidor iniciado")