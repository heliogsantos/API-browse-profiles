const express = require('express');
const mongoose = require('mongoose');
require('./src/database/connection');

const Profiles = require('./src/routers/profiles');
const Skills = require('./src/routers/skills');

const app = express();

app.use(express.json());

app.use('/profiles', Profiles)
app.use('/skills', Skills)

module.exports = { app };