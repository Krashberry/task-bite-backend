const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')

const port = process.env.PORT || 3001 //3001 is backend while 3000 is frontend in React

// middleware - JSON parsing
app.use(express.json());

// middleware - cors
const corsOptions = {
  origin: ['http//localhost:3000'], // task-bite.heroku.com
  credentials: true,
  optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

// middleware - sessions config
app.use(session({
  store: new MongoStore({ url: process.env.MONGODB_URI || "mongodb://localhost:27017/task-bite" }),
  // this could go in an env -> process.env.secret
  secret: "AnotherAllNighter",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

// middleware - passport config 
app.use(passport.initialize())
app.use(passport.session())

// middleware - API routes
app.use('/api/silo/projects', routes.projects);
app.use('/api/silo/tasks', routes.tasks);
app.use('/api/silo/users', routes.users);
app.use('/api/silo/auth', routes.auth);


// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
