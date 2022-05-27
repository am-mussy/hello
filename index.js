const express = require('express')
const app = express()
const port = 3000

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

app.get('/', (req, res) => {
    res.send(fib(1000))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
