const db = require('../models');
const { findOneAndUpdate } = require('../models/task');

const index = (req, res) => {
  db.Task.find({}, (err, foundTasks) => {
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

const create = (req, res) => {

  if (typeof(req.body.type !== 'string')) {
    res.json({ message: 'Invalid task name.' })
  }

  db.Task.create(req.body, (err, savedTask) => {
    if(err) console.log('Error in tasks#create:', err);

    if (!savedTask) return res.json({
      message: 'Task could not be saved to the database.'
    })
    
    res.json({ task: savedTask })
  });
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