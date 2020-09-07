const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// fs모듈을 사용해서 database.json 값을 data에 저장
const data = fs.readFileSync('./database.json')

// conf에 data값을 객체로 변환해서 반환
const conf = JSON.parse(data)
const mysql = require('mysql')

// conf값으로 mysql 연결
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  database: conf.database
})

connection.connect((err) => {
  if (err) {
    return err
  } else console.log('conncted')
})

// multer 모듈을 사용해 upload폴더에 이미지 저장
const multer = require('multer')
const upload = multer({ dest: './upload' })

// query문을 사용해서 crud
app.get('/api/customers', (req, res) => {
  connection.query(
    'SELECT * FROM Customer where isDeleted = 0',
    (err, row, fields) => {
      res.send(row)
    }
  )
})

// upload폴더에서 image 사용
app.use('/image', express.static('./upload'))

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES( null,?,?,?,now(),0)'
  let image = '/image/' + req.file.filename
  let name = req.body.name
  let type = req.body.type
  let params = [image, name, type]

  connection.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err)
    } else {
      res.send(rows)
    }
  })
})

app.delete('/api/customers/:id', (req, res) => {
  let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?'
  let params = [req.params.id]
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows)
  })
})

app.listen(port, () => console.log(`listen ${port}`))
