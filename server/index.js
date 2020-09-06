const express = require('express');
const app = express();
const router = express.Router(); 
const cors = require('cors');

var bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

const { mongoose } = require('./configDB/database');
const properties = require('./configDB/properties');


////START SERVER ////
main();


function main ()
{
    app.set(properties.PORT, process.env.PORT || 3000);
    app.listen(properties.PORT, () => {
        console.log(`server on port ${properties.PORT}`);
    });

    middlewares();
}

function middlewares(){

    app.use(cors({origin: '*'}));
    app.use(function(req, res, next){
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods',  '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        next();
    })      
    app.use(express.json());//de esta forma podemos entender los archivos JSON que vengan de Frontend y manipularlos 
    app.use(bodyParserJSON);
    app.use(bodyParserURLEncoded);
    routes();
}



function routes(){


    // externas  
    app.use('/api/external/torreApi', require('./routes/torreApi/torreApi.routes'))


    // internas 
    app.use('/api/internal/profile', require('./routes/profiles/profiles.routes'))
}