/*
Bryan Alvarez
11-24-2020
*/

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres', // this is the username, in my case it was postgres
      password : 'Abn0rmal',
      database : 'smartbrain'
    }
  });

//Middleware
app.use(bodyParser.json());
app.use(cors());



app.get('/', (req,res) => { res.send(database.users);});
// dependency injections
app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt) );

// different way to do dependency injections
app.get('/profile/:id', (req, res) => { profile.handleProfileGet (req, res, db) });
app.put('/image', (req, res) => { image.handleImage (req, res, db) } );
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})




app.listen(3000, () => {
    console.log('I am listening on 3000');
})



/* SHORT PLANNING BEFORE CREATING ALL THE REQUESTSS
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/


/* SHORTHAND DATBASE WAY, I LIKE THIS BETTER !!!!!!!!!!!!!!!!!!
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres', // this is the username, in my case it was postgres
      password : 'Abn0rmal',
      database : 'msmartbrain'
    }
  });
*/