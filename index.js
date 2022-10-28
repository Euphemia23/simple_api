const express = require('express')
const cors = require('cors')


const api = express()
api.use(cors())

api.get('/', cors(), (req, res) => {
    res.json({ 
        'slackUsername': 'MunaMia',
        'backend': true,
        'age': 30,
        'bio': 'I am an Electronic Engineer with interest in software development. I am a Manchester United fan'
    })
})

api.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000')
})