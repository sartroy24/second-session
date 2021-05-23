'use strict'

const fs = require('fs')
const express = require('express')
const path = require('path')
//const sessions = require('./sessions.json')
const app = express()
const port = process.env.PORT || 3001;
const sessions = fs.readFileSync(path.join(__dirname, 'sessions.json'), 'utf8')

app.get('/', (req, res) => {
    res.send('<h1>Hello Salesforce Devs From Express</h1>')
})

app.get('/api/sessions', (req, res) => {
    res.json(JSON.parse(sessions))
})

app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`)
})