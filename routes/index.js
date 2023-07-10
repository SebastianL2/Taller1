const express = require('express')
const router = express.Router()
const product = require('./../resources/products.json')
const bodyParser = require('body-parser');
const fs = require('fs');

let productos = new Map(Object.entries(product))


const json_products = fs.readFileSync('resources/products.json', 'utf-8');
let products = JSON.parse(json_products);



router.get('/', (req, res) => {
    // res.sendFile( path.join( __dirname, '../View/index.html'))    
    // }   
    //res.render('index', {title: 'Ejemplo de EJS' , dishes: dishes})
    res.render('index', {title: 'Ejemplo de EJS' ,  productos:productos})
    }
)


router.post('/submit', (req, res) => {

    const { title, type, description, price, rating } = req.body;
  
    let data = {
      title,
      type,
      description,
      price,
      rating
    };
  
    products.push(data);
    
    
    const newData = JSON.stringify(products);

    fs.writeFileSync('resources/products.json', newData, 'utf-8');

    res.redirect("/");
    }

)
module.exports  = router