const db = require('../models');

async function index(req, res) {
  if(req.user) {
    try {
      console.log("user:", req.user)
      const foundProjects = await db.Project.find({
        userId: req.user._id, 
      })
      res.json(foundProjects)
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        message: 'Error trying to display project index.'
      })
    }
  } else {
    res.json({
      message: "UNAUTHORIZED: User not authenticated. Please log in.", 
      status: 401
    })
  }
}

async function show(req, res) {
  console.log(req.user)
  try {
    const foundProject = await db.Project.find({
      userId: req.user._id, 
    });
    res.json(foundProject);
  } catch (err) {
    console.log(err);
    res.status(500).json ({
      message: 'Projects could not be shown.'
    });
  }
};

async function create(req, res) {
  try { 
    const newProject = await db.Project.create(req.body);
    const user = await db.User.findById(req.body.userId);
    user.userProjects.push(newProject._id);
    await user.save();
    res.json(newProject);
  } catch (err) {
    console.log(err);
    res.status(500).json ({
      message: 'Server Error while trying to create new project :('
    });
  }
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
      message: 'Project has been deleted! Press F in the chat.'
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