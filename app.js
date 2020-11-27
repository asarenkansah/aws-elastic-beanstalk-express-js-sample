const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Jodie is the best girl in the world and I love her so so so so sososososo much'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
