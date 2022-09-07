const mongoose = require('mongoose');
const express = require('express');
const faker = require("faker")
const app = express();

//Rutas de product

let id = 0;

app.get('/productos/vista-test', (req, res) => {
    const array = [];

    const cant = Number(req.query.cant);
    if(cant == 0){
        res.json(`No hay productos`)
    }else{
    const cantidadAGenerar = isNaN(cant) ? 10 : cant;
  
    for (let index = 0; index < cantidadAGenerar; index++) {
      array.push({
        id: ++id,
        name: faker.commerce.productName(),
        price: faker.datatype.number(),
        thumbnail: faker.image.image()
      });
    }
  
    res.json(array);
}
})

//Server

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});
