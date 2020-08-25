const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  taskStatus: {
    type: String,
  }, 
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task;