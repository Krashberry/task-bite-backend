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

    if (!foundTasks.length) return res.json({
      message: 'No task found in the database.'
    })
    
    res.status(200).json({ tasks: foundTasks })
  });
};

const create = (req, res) => {
  db.Task.create(req.body, (err, savedTasks) => {
    if(err) console.log('Error in tasks#create:', err);

    if (!savedTasks.length) return res.json({
      message: 'No task saved in the database.'
    })
    
    res.status(200).json({ tasks: savedTasks })
  });
};

const update = (req, res) => {
  db.Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTasks) => {
    if(err) console.log('Error in tasks#update:', err);

    if (!updatedTasks.length) return res.json({
      message: 'No task updated in the database.'
    })
    
    res.status(200).json({ tasks: updatedTasks })
  });
};

const destroy = (req, res) => {
  db.Task.findByIdAndDelete(req.params.id, (err, deletedTasks) => {
    if(err) console.log('Error in tasks#destroy:', err);

    if (!deletedTasks.length) return res.json({
      message: 'No task deleted in the database.'
    })
    
    res.status(200).json({ tasks: deletedTasks })
  });
};

module.exports = {
  index, 
  show,
  create,
  update,
  destroy
}