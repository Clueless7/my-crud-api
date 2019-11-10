const express = require('express');
const router = express.Router();
const hobbies = require('../../models/Hobbies');

// Middleware to check id
const checkId = function(req, res, next) {
  if (!req.params.id) {
    res.status(404).json({ message: 'Please insert an id' });
    return;
  }

  if (isNaN(parseInt(req.params.id))) {
    res.status(404).json({ message: 'Id must be a number' });
    return;
  }

  next();
};

// Route for getting all the hobbies
router.get('/', (req, res) => {
  res.json(hobbies);
});

// Route for getting one hobby
router.get('/:id', checkId, (req, res) => {
  const id = parseInt(req.params.id);

  const found = hobbies.some(hobby => hobby.id === id);

  if (found) {
    const foundHobby = hobbies.find(hobby => hobby.id === id);
    res.send(foundHobby);
  } else {
    res.status(404).json({ message: `No hobby with the id of ${id}` });
  }
});

// Route for creating a hobby
router.post('/', (req, res) => {
  if (!req.body.hobby || !req.body.id) {
    res.status(404).json({ message: 'Please input an id and a hobby' });
    return;
  }

  if (isNaN(parseInt(req.body.id))) {
    res.status(404).json({ message: 'Id must be a number' });
    return;
  }

  const newHobby = {
    id: parseInt(req.body.id),
    hobby: req.body.hobby
  };

  hobbies.push(newHobby);
  res.sendStatus(204);
});

// Router for deleting a hobby
router.delete('/:id', checkId, (req, res) => {
  const id = parseInt(req.params.id);

  const found = hobbies.some(hobby => hobby.id === id);

  if (found) {
    const foundHobby = hobbies.find(hobby => hobby.id === parseInt(id));

    const index = hobbies.indexOf(foundHobby);

    hobbies.splice(index, 1);

    res.sendStatus(204);
  } else {
    res.status(404).json({ message: `No hobby with the id of ${id}` });
  }
});

// Router for patch
router.patch('/:id', checkId, (req, res) => {
  if (!req.body.hobby) {
    res.status(404).json({ message: 'Please input a hobby' });
    return;
  }

  const id = parseInt(req.params.id);

  const found = hobbies.some(hobby => hobby.id === id);

  if (found) {
    const foundHobby = hobbies.find(hobby => hobby.id === id);

    foundHobby.hobby = req.body.hobby;
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: `No hobby with the id of ${id}` });
  }
});

module.exports = router;
