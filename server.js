const express = require('express');
const app = express();
const hobbiesRouter = require('./routes/api/hobbies');

app.use(express.json());

app.use('/api/hobbies', hobbiesRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000, () => console.log('listening on *:3000'));
