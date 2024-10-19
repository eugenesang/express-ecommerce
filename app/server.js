require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index')
})

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log('Server listing at port '+ port);
})