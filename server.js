const { app } = require('./app');

app.listen(app.port, () => console.log(`Server runing in port: ${app.port}`));

