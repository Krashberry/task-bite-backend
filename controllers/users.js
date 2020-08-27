const db = require('../models');


const index = (req, res) => {
  db.User.find({}, (err, foundUsers) => {
    if (err) console.log('Error in users#index:', err);

    if (!foundUsers.length) return res.json({
      message: 'No users found in the database.'
    })

    res.status(200).json({ users: foundUsers })
  });
};

const show = (req, res) => {
  db.User.findById(req.params.id, (err, foundUsers) => {
    if(err) console.log('Error in users#show:', err);

    if (!foundUsers.length) return res.json({
      message: 'No users found in the database.'
    })

    res.status(200).json({ users: foundUsers })

  });
};

const create = (req, res) => {
  db.User.create(req.body, (err, savedUsers) => {
    if(err) console.log('Error in users#create:', err);

    if (!savedUsers.length) return res.json({
      message: 'No users saved in the database.'
    })

    res.status(200).json({ users: savedUsers })
  });
};

module.exports = {
  index,
  show,
  create
}