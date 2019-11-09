const express = require('express');
const router = express.Router();
const hobbies = require('../../models/Hobbies');

router.get('/', (req, res) => {
  res.json(hobbies);
});

router.get('/:id', (req, res) => {
  const found = hobbies.some(hobby => hobby.id === parseInt(req.params.id));

  if (found) {
    const foundHobby = hobbies.find(
      hobby => hobby.id === parseInt(req.params.id)
    );
    res.send(foundHobby);
  } else {
    res.status(404).json({ message: 'id not found' });
  }
});

router.post('/', (req, res) => {
  if (!req.body.hobby || !req.body.id) {
    res.status(404).json({ message: 'please input an id and a hobby' });
    return;
  }

  const newHobby = {
    id: req.body.id,
    hobby: req.body.hobby
  };

  hobbies.push(newHobby);
  res.sendStatus(204);
});

router.delete('/:id', (req, res) => {
  const found = hobbies.some(hobby => hobby.id === parseInt(req.params.id));

  if (found) {
    const foundHobby = hobbies.find(
      hobby => hobby.id === parseInt(req.params.id)
    );

    const index = hobbies.indexOf(foundHobby);

    hobbies.splice(index, 1);

    res.sendStatus(204);
  } else {
    res.status(404).json({ message: 'hobby not found' });
  }
});

router.patch('/:id', (req, res) => {
  const found = hobbies.some(hobby => hobby.id === parseInt(req.params.id));

  if (found) {
    const foundHobby = hobbies.find(
      hobby => hobby.id === parseInt(req.params.id)
    );

    if (!req.body.hobby) {
      res.status(404).json({ message: 'please check your input' });
    } else {
      foundHobby.hobby = req.body.hobby;
      res.json(hobbies);
    }
  } else {
    res.status(404).json({ message: 'hobby not found' });
  }
});

module.exports = router;
