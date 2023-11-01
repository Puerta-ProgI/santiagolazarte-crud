let productos = require("../data/productos")

const controller =  {
    home: (req,res) => {
        res.send("Holi");
    },
    listadoDeProductos: (req,res) => {
    res.send(productos)
    },                                                                 
    detalleDeProducto: (req,res)  => {
        res.send(productos.find((producto) => {
            return producto.id == req.params.id;
        }))
    }
       
};
module.exports = controller;
