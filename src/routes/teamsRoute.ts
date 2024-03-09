import express from 'express';
import { TeamsController } from '../controllers/TeamsController';

export const teamsRouter = express.Router();

teamsRouter.get('/', TeamsController.getTeams);
teamsRouter.get('/:id', TeamsController.getTeambyId);
teamsRouter.delete('/:id', TeamsController.deleteTeam);
teamsRouter.post('/', TeamsController.createTeam);
