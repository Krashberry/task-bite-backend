const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')

const port = process.env.PORT || 3001 //3001 is backend while 3001 is frontend in React
const app = express()

// middleware - JSON parsing
// app.use(express.json())

// middleware - API routes
app.use('/api/projects', routes.projects);
app.use('/api/tasks', routes.tasks);
app.use('/api/auth', routes.auth);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
