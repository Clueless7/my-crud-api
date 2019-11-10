const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const hobbiesRouter = require('./routes/api/hobbies');

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/hobbies', hobbiesRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
