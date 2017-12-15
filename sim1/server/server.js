const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive');
    require('dotenv').config()


    //TOP MIDDLEWARE
    const app = express(); //express invoked
    app.use(bodyParser.json());
    app.use(cors());
    massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) );
    

    //MIDDLEWARE



    const port = 3000;
    app.listen(port, () => {console.log(`Server is listening on port ${port}.`)})