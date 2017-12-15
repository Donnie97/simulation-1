const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive');
    var binsCtrl = require('./bin_controller');
    require('dotenv').config()


    //TOP MIDDLEWARE
    const app = express(); //express invoked
    app.use(bodyParser.json());//bodyparser 76F
    app.use(cors());
    massive( process.env.CONNECTION_STRING ).then( db => { 
        console.log('Connected bruh')
        app.set('db', db) 
    });
    

    //MIDDLEWARE //Restful apis POST GET PUT DELETE 76C for restful apis
    app.get("/api/:shelf", binsCtrl.getBins) //74D-1
    app.get("/api/:shelf/:bin", binsCtrl.getBin)
    app.put("/api/:shelf/:bin", binsCtrl.updateBin) //Updates Bin with put 74D-2
    app.put("/api/createbin/:shelf/:bin", binsCtrl.updateBin)//updates bin with put using same sql
    app.delete('/api/:shelf/:bin', binsCtrl.deleteBin) //74D-4
    app.post("/api/:shelf", binsCtrl.createBin); //Working post creates bin 74D-3


    const port = 3000;
    app.listen(port, () => {console.log(`Server is listening on port ${port}.`)})