const express =require('express');
const servidor = express();

servidor.get('/', function(req,res){
    res.send('Tarea 4');
});

servidor.get('/', function(req,res){
    res.send('Tarea 4');
});

servidor.listen(3000, function(){
    console.log('Estoy escuchado en el puerto 3000');
});