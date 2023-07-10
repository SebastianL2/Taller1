const express = require('express');
//const path =require ('path')
const app = express();
//app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))

app.set('PORT', process.env.PORT || 3000);
app.use('views', express.static(__dirname + '/views'))
app.set('view engine', 'ejs');


app.use('/',require('./routes/index'))


/*app.get('/',(req,res)=>{
    res.send('Hellow World')
})*/
app.listen(app.get('PORT'),()=>{
    console.log('servidor en el puerto:  '+app.get('PORT'))
})