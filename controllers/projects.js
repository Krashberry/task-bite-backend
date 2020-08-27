const db = require('../models');

const index = (req, res) => {
  db.Project.find({}, (err, foundProjects) => {
    if (err) console.log('Error in projects#index:', err);

    if (!foundProjects.length) return res.json({
      message: 'No project found in the database.'
    })
    
    res.status(200).json({ projects: foundProjects })
  });
};

const show = (req, res) => {
  db.Project.findById(req.params.id, (err, foundProjects) => {
    if(err) console.log('Error in projects#show:', err);

    if (!savedProjects.length) return res.json({
      message: 'No Project saved in the database.'
    })
    
    res.status(200).json({ projects: savedProjects })
  });
};

const create = (req, res) => {
  db.Project.create(req.body, (err, savedProjects) => {
    if(err) console.log('Error in projects#create:', err);

    if (!savedProjects.length) return res.json({
      message: 'No Project saved in the database.'
    })
    
    res.status(200).json({ projects: savedProjects })
  });
};

const update = (req, res) => {
  db.Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProjects) => {
    if(err) console.log('Error in projects#update:', err);

    if (!updatedProjects.length) return res.json({
      message: 'No project updated in the database.'
    })
    
    res.status(200).json({ projects: updatedProjects })
  });
};

const destroy = (req, res) => {
  db.Project.findByIdAndDelete(req.params.id, (err, deletedProjects) => {
    if(err) console.log('Error in projects#destroy:', err);

    if (!deletedProjects.length) return res.json({
      message: 'No project deleted in the database.'
    })
    
    res.status(200).json({ projects: deletedProjects })
  });
};

module.exports = {
  index, 
  show,
  create,
  update,
  destroy
}