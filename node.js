// app/app.js
const express = require('express');
const app = express();

const PORT = 3000;
const APP_NAME = process.env.APP_NAME || 'devops-app';
const ENV = process.env.APP_ENV || 'local';

app.get('/', (req, res) => {
  console.log('Request received');
  res.json({ app: APP_NAME, env: ENV });
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => {
  console.log(`${APP_NAME} running on port ${PORT}`);
});
s