const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Responding
  res.json({
    message: 'Thank you for your submission!',
    data: formData,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
