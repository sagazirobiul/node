const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('I know how to install node YAY')
})

app.listen(100, () => console.log('This is port 100'))