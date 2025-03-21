const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let onlineUsers = {}; // Om de online gebruikers bij te houden (in het geheugen, niet voor productie!)

app.use(bodyParser.json()); // Om JSON-data te kunnen lezen in de verzoeken

app.post('/user-activity', (req, res) => {
  const { userId, activity } = req.body;

  if (activity === 'online') {
    onlineUsers[userId] = Date.now(); // Sla de tijd op waarop de gebruiker voor het laatst actief was
  }

  // Verwijder inactieve gebruikers (voorbeeld: na 5 minuten inactiviteit)
  const now = Date.now();
  for (const id in onlineUsers) {
    if (now - onlineUsers[id] > 300000) { // 5 minuten = 300000 milliseconden
      delete onlineUsers[id];
    }
  }

  // Stuur het aantal online gebruikers terug
  res.json({ userCount: Object.keys(onlineUsers).length });
});

const port = process.env.PORT || 5500; // Gebruik de omgevingsvariabele PORT indien beschikbaar
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
