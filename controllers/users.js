const db = require('../models')

const show = (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
    if(err) console.log('Error in users#show:', err);

    res.send("Icomplete users#show controller function");
  });
};

const create = (req, res) => {
  db.User.create(req.body, (err, savedUser) => {
    if(err) console.log('Error in users#create:', err);

    res.send("Icomplete users#create controller function");
  });
};