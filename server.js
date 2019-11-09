const express = require('express');
const app = express();
const hobbiesRouter = require('./routes/api/hobbies');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/hobbies', hobbiesRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
