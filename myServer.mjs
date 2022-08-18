import express from 'express'
const app = express()
const port = 3000

let user=[];

app.get('/', (req, res) => {
  res.send('Get User!')
})

app.post('/user', (req, res) => {
  res.send('User is Created')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})