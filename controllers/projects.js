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

    if (!foundProjects.length) return res.json({
      message: 'No project in the database to show.'
    })
    
    res.json({ projects: foundProjects })
  });
};

const create = (req, res) => {

  if (typeof(req.body.type))
  db.Project.create(req.body, (err, savedProject) => {
    if(err) console.log('Error in projects#create:', err);

    if (!savedProject) return res.json({
      message: 'Project could not be saved to the database.'
    })
    
    res.json({ project: savedProject })
  });
};

const update = (req, res) => {
  db.Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProject) => {
    if(err) console.log('Error in project#update:', err);

    if (!updatedProject) return res.json({
      message: 'Project could not be updated :( '
    })
    
    res.json({ 
      task: updatedProject,
      message: `${updatedProject.projectName} was updated!`
    })  });
};

const destroy = (req, res) => {
  db.Project.findByIdAndDelete(req.params.id, (err, deletedProject) => {
    if(err) console.log('Error in project#destroy:', err);
    
    res.json({ 
      message: `Project has been deleted! Press F in the chat.`
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