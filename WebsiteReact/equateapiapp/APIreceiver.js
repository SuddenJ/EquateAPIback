const express = require('express');
const app = express();

app.post('/webhook', (req, res) => {
  // Parse the request body
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    // Do something with the request data
    console.log(body);

    // Send a response back to the client
    res.send('200 ok');
  });
});

app.listen(3001, () => console.log('Server listening on port 3001'));