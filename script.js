// let a = 10;

// let b = 20;

// module.exports = {first: a, second: b};

// npm => node package manager
// npm ko node ka playstore .
// npm ek jagah hai jaha par khoob saare packages milte hai.
//  package -> bani banaai cheejein/features kehlaate hai packages.

// npm = files of codes

// install -> npm i 
// use -> read usage on website
// var oneLinerJoke = require('one-liner-joke');
// how to print results
// console.log(oneLinerJoke.getRandomJoke());

// express framework
// -------------------------------------------------------------------L

// express -> 
// install
// express js boilerplate code
  // go to npm
  // search express
  // copy the code
// express js ejs setup
  // install ejs
  // set view engine
  // create view folder
  // create ejs files
  // render ejs files inside route
  // architecture of public folder
  const express = require('express')
  const app = express();
  
  
  app.set("view engine", "ejs");
  // express static files setup
app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/tech', function (req, res) {
  throw Error(' what is this ');
});

app.get('/error', function (req, res, next) {
  throw Error("Some thing went wrong");
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

// app.get('/profile/:username', function (req, res) {
//   res.send(`Hello from ${req.params.username}`);
// })

app.listen(3000)