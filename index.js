const express = require('express');
const app = express();
const http = require('http');
const Port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

http.createServer(app).listen(Port, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', Port, Port);
    console.log('Swagger-ui is available on http://localhost:%d/api-docs', Port);
});
