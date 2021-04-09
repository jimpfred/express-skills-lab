// require our modules (like express)
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

// initialize the express app
const app = express();

// configure application settings app.set()
app.set('view engine', 'ejs');


// mount our middleware app.use()
app.use(morgan('dev')); // http logger middleware
app.use(express.static('public')); // this is how we serve css, imgs & js
app.use(express.urlencoded({ extended: false })); // this is how we process html5 form data
// ^ this middleware turns our form data into req.body
app.use(methodOverride('_method'));


app.use(function(req, res, next) {
    console.log('Hello intrepid learner');
    req.time = new Date().toLocaleTimeString();
    next();
});

// mount our routes app.use()

app.use('/', indexRouter);
app.use('/skills', skillsRouter);
console.log('mount')

// tell the app to listen on a port for requests
// port will be used to run node process
app.listen(3000, function() {
    console.log('Express is listening for requests from the browser');
});
