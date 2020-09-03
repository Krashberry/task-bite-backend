const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  projectName: {
    type: String,
    required: true,
    minlength: 1
  },
  projectTasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  }]
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project;