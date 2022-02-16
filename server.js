require('dotenv').config();
const { app } = require('./app');
const process = require('process');

const port = process.env.PORT;

app.listen(port, () => console.log(`Server runing in port: ${port}`));

