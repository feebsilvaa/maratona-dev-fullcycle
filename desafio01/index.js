const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('hello world!');
  let message = {
    status: 'Hello World!'
  }
  res.json(message);
})

app.listen(port, () => {
  console.log(`Server is running at localhost: ${port}`)
  console.log('Maratona Full Cycle 2.0');
});