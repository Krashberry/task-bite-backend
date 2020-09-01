const db = require('../models');
const { findOneAndUpdate } = require('../models/task');

const index = (req, res) => {
  db.Task.find({
    projectId: req.query.projectId
  }, (err, foundTasks) => {
    if (err) console.log('Error in tasks#index:', err);

    if (!foundTasks.length) return res.json({
      message: 'No task found in the database.'
    })
    
    res.status(200).json({ tasks: foundTasks })
  });
};

const show = (req, res) => {
  db.Task.findById(req.params.id, (err, foundTasks) => {
    if(err) console.log('Error in tasks#show:', err);

    if (!foundTasks) return res.json({
      message: 'No task found in the database to show.'
    })
    
    res.json({ tasks: foundTasks })
  });
};

async function create(req, res) {
  try { 
    const newTask = await db.Task.create(req.body);
    const project = await db.Project.findById(req.body.projectId);
    project.projectTasks.push(newTask._id);
    await project.save();
    res.json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json ({
      message: 'Server Error while trying to create new task :('
    });
  }
};

const update = (req, res) => {
  db.Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTask) => {
    if(err) console.log('Error in task#update:', err);

    if (!updatedTask) return res.json({
      message: 'Task could not be updated :( '
    })
    
    res.json({ 
      task: updatedTask,
      message: `${updatedTask.taskName} was updated!`
    })
  });
};

const destroy = (req, res) => {
  db.Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
    if(err) console.log('Error in tasks#destroy:', err);
    
    res.json({ 
      message: `Task has been deleted! Press F in the chat.`
    })
  });
};

module.exports = {
  index, 
  show,
  create,
  update,
  destroy
}