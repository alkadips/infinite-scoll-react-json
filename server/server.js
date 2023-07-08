const express = require('express')
const request = require('request')
const cors = require('cors')
const app = express()
const port = 8000
app.use(cors())
app.get('/feeds', (req, response) => {
  const page=req.query.page
     request(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`,(err,res,body)=>{
        response.send(body)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})