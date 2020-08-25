const db = require('../models');

const index = (req, res) => {
  db.Project.find({}, (err, foundProjects) => {
    if (err) console.log('Error in projects#index:', err);

    res.send("Incomplete projects#index controller function");
  });
};

const show = (req, res) => {
  db.Project.findById(req.params.id, (err, foundProject) => {
    if(err) console.log('Error in projects#show:', err);

    res.send("Icomplete projects#show cotnroller function");
  });
};

const create = (req, res) => {
  db.Project.create(req.body, (err, savedProject) => {
    if(err) console.log('Error in projects#create:', err);

    res.send("Icomplete projects#create controller function");
  });
};

const update = (req, res) => {
  db.Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProject) => {
    if(err) console.log('Error in projects#update:', err);

    res.send("Icomplete projects#update controller function");
  });
};

const destroy = (req, res) => {
  db.Project.findByIdAndDelete(req.params.id, (err, deletedProject) => {
    if(err) console.log('Error in projects#destroy:', err);

    res.send("Icomplete projects#destroy controller function");
  });
};

