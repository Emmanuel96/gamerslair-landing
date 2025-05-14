const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

// Handle GET requests for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all other HTTP methods
app.all('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 