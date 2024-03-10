import { pokeAPI } from './../services/pokeAPI';
import { Request, Response } from 'express';
import { teamsModel } from '../models/teamsModel';

const getTeams = async (req: Request, res: Response) => {
	const currentTeams = await teamsModel.getTeams();
	res.send(currentTeams);
};

const getTeambyId = async (req: Request, res: Response) => {
	const id = req.params.id;
	if (!id) {
		res.status(400).send('Missing parameters');
	}
	const teamById = await teamsModel.getTeamById(id);
	res.send(teamById);
};
const deleteTeam = async (req: Request, res: Response) => {
	const id = req.params.id;
	if (!id) {
		res.status(400).send('Missing parameters');
	}
	const teamById = await teamsModel.deleteTeam(id);
	res.send(teamById);
};

const createTeam = async (req: Request, res: Response) => {
	const body = req.body;
	const owner = body.owner;
	const team: string[] = body.team;
	if (!body.owner || !body.team) {
		res.status(400).send('Missing parameters');
		console.log(body);
	}
	const pokemons: object[] = [];
	let message = 'Success';
	for (const component of team) {
		const pokemon = await pokeAPI.getPokemon(component);
		if (pokemon) {
			pokemons.push(pokemon);
		} else {
			message += `. Pokemon ${component} was not found.`;
		}
	}

	const createdTeam = await teamsModel.createTeam({ owner, pokemons });
	res.send({ message, createdTeam });
};

export const TeamsController = {
	getTeams,
	getTeambyId,
	createTeam,
	deleteTeam,
};
