// server.js --------------------------
var express = require('express'),
    app     = express();
        const cors = require('cors');

    app.use(cors({
      origin: 'http://localhost:3000', // Your frontend URL (React app)
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type'],
    }));
app.use(express.static('./public'))

// Create basic server
app.listen(3000, function() {
  console.log('Connected to server...');
});

/*
  Had to set up server because Chrome doesn't like it
  when you don't serve js files over HTTP -_-
 */