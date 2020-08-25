const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/task-bite"

const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(connectionString, configuration)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch(err => console.log(`MongoDB connection: ${err}`));

  module.exports = {
    Project: require('./project'),
    Task: require('./task'),
    User: require('./user')
  };
