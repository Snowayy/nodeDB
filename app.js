const express = require('express')
const bodyParser = require('body-parser')
const userController = require('./controllers/userControllers')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', userController.getAllUsers)

app.get('/edit/:id', userController.getUserById)
app.post('/edit/:id', userController.updateUser)
app.get('/add', (req, res) => res.render('add'))
app.post('/add', userController.addUser)

app.listen(2000, () => {

    console.log('servidor rodando na porta 2000')

})