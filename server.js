const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html on root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
