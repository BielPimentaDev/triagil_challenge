import { pokeAPI } from './../services/pokeAPI';
import { Request, Response } from 'express';
import { teamsModel } from '../models/teamsModel';

const getTeams = async (req: Request, res: Response) => {
	const currentTeams = await teamsModel.getTeams();
	res.send(currentTeams);
};

const getTeambyId = async (req: Request, res: Response) => {
	const id = req.params.id;
	const teamById = await teamsModel.getTeamById(id);
	res.send(teamById);
};
const deleteTeam = async (req: Request, res: Response) => {
	const id = req.params.id;
	const teamById = await teamsModel.deleteTeam(id);
	res.send(teamById);
};

const createTeam = async (req: Request, res: Response) => {
	const body = req.body;
	const owner = body.owner;
	const team: string[] = body.team;

	const pokemons: object[] = [];

	for (const component of team) {
		const pokemon = await pokeAPI.getPokemon(component);
		if (pokemon) {
			pokemons.push(pokemon);
		} else {
			console.log(`Pokemon ${component} nâo encontrado.`);
		}
	}

	const createdTeam = await teamsModel.createTeam({ owner, pokemons });

	res.send({ message: 'Success', createdTeam });
};

export const TeamsController = {
	getTeams,
	getTeambyId,
	createTeam,
	deleteTeam,
};
