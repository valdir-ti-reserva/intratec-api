const express = require('express')

const app = express()

const PORT = process.env.PORT || 3333

app.use(express.json())

app.get('/about', (req, res) => {
  res.json({
    name: 'Valdir Silva',
    email: 'valdir.ti@gmail.com',
    contacts: [
      {
        type: 'github',
        url: 'https://github.com/valdir-ti'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/valdirti/'
      }
    ]
  })
})

app.get('/', (req, res) => {
  res.json({ message: 'OK' })
})

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`)
})
