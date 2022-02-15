const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const process = require('process');

const app = express();

app.use(express.json());

app.port = process.env.PORT || 3000

module.exports = { app };