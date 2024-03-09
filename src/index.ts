import express from 'express';
import { teamsRouter } from './routes/teamsRoute';

const app = express();
app.use(express.json());
const port = 3000;

app.use('/api/teams', teamsRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
