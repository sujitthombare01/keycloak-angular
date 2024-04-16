const express = require('express');
const app = express();
const port = 3000;
const keycloak = require('./keycloak/keycloakMiddleware');
const cors = require('cors');

app.use(cors());

app.get('/welcome', (req, res) => {
  res.send({user: 'backend', message: 'Welcome backend'})
})

app.get('/basic/users',keycloak.hasRealmRoles([]), (req, res) => {
  let users = [
    {
      
      "name": "Pennington Moreno",
      "gender": "male",
      "company": "OMATOM",
     
    }
  ];
  res.send(users)
})

app.get('/users',keycloak.hasRealmRoles(['app-user']), (req, res) => {
  let users = [
    {
      
      "name": "Pennington Moreno",
      "gender": "male",
      "company": "OMATOM",
     
    },
    {
    
      "name": "Barrera Goodwin",
      "gender": "male",
      "company": "SYBIXTEX",
     
    },
    {
      
      "name": "Lilly Hopkins",
      "gender": "female",
      "company": "SUSTENZA",
    
    },
    {
      "name": "Bolton Terry",
      "gender": "male",
      "company": "WATERBABY",
    },
    {
      
      "name": "Wendy Marquez",
      "gender": "female",
      "company": "IMAGEFLOW",
    },
    {
      
      "name": "Ashley Cunningham",
      "gender": "male",
      "company": "RAMJOB",
    },
    {
     
      "name": "Maricela Price",
      "gender": "female",
      "company": "CUJO",
    }
  ];
  res.send(users)
})

app.get('/details/users',keycloak.hasRealmRoles(['app-admin']), (req, res) => {
  let users = [
    {
      "age": 33,
      "eyeColor": "brown",
      "name": "Pennington Moreno",
      "gender": "male",
      "company": "OMATOM",
      "email": "penningtonmoreno@omatom.com",
      "phone": "+1 (905) 543-3969",
      "address": "782 Lorimer Street, Bagtown, Delaware, 4030"
    },
    {
      "age": 25,
      "eyeColor": "green",
      "name": "Barrera Goodwin",
      "gender": "male",
      "company": "SYBIXTEX",
      "email": "barreragoodwin@sybixtex.com",
      "phone": "+1 (925) 450-2969",
      "address": "732 Friel Place, Yorklyn, Arizona, 5846"
    },
    {
      "age": 40,
      "eyeColor": "green",
      "name": "Lilly Hopkins",
      "gender": "female",
      "company": "SUSTENZA",
      "email": "lillyhopkins@sustenza.com",
      "phone": "+1 (970) 444-3966",
      "address": "938 Elliott Walk, Cleary, Illinois, 9246"
    },
    {
      "age": 36,
      "eyeColor": "green",
      "name": "Bolton Terry",
      "gender": "male",
      "company": "WATERBABY",
      "email": "boltonterry@waterbaby.com",
      "phone": "+1 (803) 546-3719",
      "address": "273 Lawn Court, Eastvale, Nevada, 5123"
    },
    {
      "age": 31,
      "eyeColor": "brown",
      "name": "Wendy Marquez",
      "gender": "female",
      "company": "IMAGEFLOW",
      "email": "wendymarquez@imageflow.com",
      "phone": "+1 (861) 553-3148",
      "address": "314 Richards Street, Hondah, Puerto Rico, 1461"
    },
    {
      "age": 28,
      "eyeColor": "brown",
      "name": "Ashley Cunningham",
      "gender": "male",
      "company": "RAMJOB",
      "email": "ashleycunningham@ramjob.com",
      "phone": "+1 (808) 579-3498",
      "address": "265 Carroll Street, Bowie, Rhode Island, 6848"
    },
    {
      "age": 26,
      "eyeColor": "green",
      "name": "Maricela Price",
      "gender": "female",
      "company": "CUJO",
      "email": "maricelaprice@cujo.com",
      "phone": "+1 (916) 464-2761",
      "address": "720 Atlantic Avenue, Wakarusa, Louisiana, 5191"
    }
  ];
  res.send(users)
})


app.get('/countries',keycloak.hasRealmRoles(['app-admin', 'app-user']), (req, res) => {
  let countries = [
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}];
  res.send(countries)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})