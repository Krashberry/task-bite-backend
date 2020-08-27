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
app.use(cors())

// middleware - API routes
app.use('/api/silo/projects', routes.projects);
app.use('/api/silo/tasks', routes.tasks);
app.use('/api/silo/users', routes.users);
app.use('/api/silo/auth', routes.auth);


// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
