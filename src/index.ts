import express from 'express';
import { teamsRouter } from './routes/teamsRoute';

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();
app.use(express.json());
const port = 3000;

app.use('/api/teams', teamsRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
