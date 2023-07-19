const express = require('express');
const router  = require('./routes');
const { PORT } = require('./config');

const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server running successfully at port ${PORT}`);
  } else {
    console.log('Error occurred! Server failed to run');
  }
});