const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ProjectSchema = new Schema({
  projectId: {
    type: String,
    required: true,
    unique: true,
  },
  projectName: {
    type: String,
    required: true
  },
  projectPercentage: {
    type: Number
  }
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project;