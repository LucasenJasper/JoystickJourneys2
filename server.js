const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Om JSON-data te kunnen lezen in de verzoeken

// Removed the /user-activity route

const port = process.env.PORT || 8080; // Gebruik de omgevingsvariabele PORT indien beschikbaar
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
