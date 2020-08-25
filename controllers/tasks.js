const db = require('../models');

const index = (req, res) => {
  db.Task.find({}, (err, foundTasks) => {
    if (err) console.log('Error in tasks#index:', err);

    res.send("Incomplete tasks#index controller function");
  });
};

const show = (req, res) => {
  db.Task.findById(req.params.id, (err, foundTask) => {
    if(err) console.log('Error in tasks#show:', err);

    res.send("Icomplete tasks#show cotnroller function");
  });
};

const create = (req, res) => {
  db.Task.create(req.body, (err, savedTask) => {
    if(err) console.log('Error in tasks#create:', err);

    res.send("Icomplete tasks#create controller function");
  });
};

const update = (req, res) => {
  db.Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTask) => {
    if(err) console.log('Error in tasks#update:', err);

    res.send("Icomplete tasks#update controller function");
  });
};

const destroy = (req, res) => {
  db.Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
    if(err) console.log('Error in tasks#destroy:', err);

    res.send("Icomplete tasks#destroy controller function");
  });
};