const express = require('express')
const cors = require('cors')


const api = express()
api.use(cors())

api.get('/', cors(), (req, res) => {

    console.log(req.query)

    res.json({ 
        'slackUsername': 'MunaMia',
        'backend': true,
        'age': 30,
        'bio': 'I am an Electronic Engineer with interest in software development. I am a Manchester United fan'
    })
})

function detectOperationType (w) {
    posibleAddition = ['add', 'plus', 'sum', 'addition', 'add together', 'sum up', 'add up', 'add up together', 'sum together']
    posibleSubtraction = ['subtract', 'minus', 'remove', 'difference', 'subtraction', 'subtract from', 'minus from', 'difference from', 'subtract from each other', 'minus from each other', 'difference from each other']
    posibleMultiplication = ['multiply', 'product', 'multiplication', 'multiply together', 'product of', 'multiply by', 'product by', 'multiply by each other', 'product by each other']
    
    if (posibleAddition.includes(w)) {
        return 'addition'
    } else if (posibleSubtraction.includes(w)) {
        return 'subtraction'
    } else if (posibleMultiplication.includes(w)) {
        return 'multiplication'
    } else {
        return 'addition'
    }
}

api.post('/calculator', cors(), (req, res) => {
    
    req.on('data', (data) => {

        const { operation_type, x, y } = JSON.parse(data.toString())

        const operationType = detectOperationType(operation_type)
        let result = 0

        if (operationType === 'addition') {
            result = x + y
        } else if (operationType === 'subtraction') {
            result = x - y
        } else if (operationType === 'multiplication') {
            result = x * y
        } else {
            result = x + y
        }

        res.json({ 
            'slackUsername': 'MunaMia',
            'operation_type': operationType,
            'result': result
        })
    })
})


api.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000')
})