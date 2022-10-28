const express = require('express')
const api = express()


api.get('/', (req, res) => {
    res.json({ 
        'slackUsername': 'MunaMia',
        'backend': true,
        'age': 30,
        'bio': 'I am an Electronic Engineer with interest in software development. I am a Manchester United fan'
    })
})

api.listen(3000, () => {
    console.log('Server is running on port 3000')
})