const express = require('express');
const route = require('./rotes');

const app = express();

app.use(express.json());

app.use(route);

app.listen(3000);