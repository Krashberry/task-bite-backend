const db = require('../models');

const index = (req, res) => {
  db.User.find({}, (err, foundUsers) => {
    if (err) console.log('Error in users#index:', err);
    // look for and return any users in the database 
    if (!foundUsers.length) return res.json({
      message: 'No users found in the database.'
    })
    // send back any users found
    res.json({ users: foundUsers })
  });
};

const show = (req, res) => {
  db.User.findById(req.params.id, (err, foundUsers) => {
    if(err) console.log('Error in users#show:', err);

    if (!foundUsers) return res.json({
      message: 'No users found by that ID in the database.'
    })

    console.log(foundUsers)
    res.json({ users: foundUsers })

  });
};

const create = (req, res) => {
  if (typeof(req.body.password !== 'string')) {
    res.json({ message: 'Invalid Password format.'})
  }
  db.User.create(req.body, (err, savedUsers) => {
    if(err) console.log('Error in users#create:', err);

    if (!savedUsers) return res.json({
      message: 'No users saved in the database.'
    })
    res.json({ users: savedUsers })
  });
};

const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if(err) console.log('Error in users#destroy:', err);
    
    res.json({ 
      message: `User has been deleted! Press F in the chat.`
    })
  });
};

module.exports = {
  index,
  show,
  create,
  destroy
}