import { teamsModel } from '../models/teamsModel';

const cryptos = require('crypto');
const axios = require('axios');

const generate = () => {
	return cryptos.randomBytes(20).toString('hex');
};

test('Should get teams', async () => {
	const owner1 = generate();
	const owner2 = generate();
	const owner3 = generate();
	const team1 = await teamsModel.createTeam({
		owner: owner1,
		team: ['pikachu'],
	});
	const team2 = await teamsModel.createTeam({
		owner: owner2,
		team: ['pikachu'],
	});
	const team3 = await teamsModel.createTeam({
		owner: owner3,
		team: ['pikachu'],
	});

	const response = await axios.get('http://localhost:3000/api/teams');
	const teams = response.data;

	expect(teams[team1.id].owner).toBe(owner1);
	expect(teams[team2.id].owner).toBe(owner2);
	expect(teams[team3.id].owner).toBe(owner3);

	await teamsModel.deleteTeam(String(team1));
	await teamsModel.deleteTeam(String(team2));
	await teamsModel.deleteTeam(String(team3));
});

test('Should get team by id', async () => {
	const owner = generate();
	const createdTeam = await teamsModel.createTeam({
		owner,
		team: ['pikachu'],
	});
	const response = await axios.get(
		`http://localhost:3000/api/teams/${createdTeam.id}`
	);
	expect(response.data.owner).toBe(owner);
	await teamsModel.deleteTeam(createdTeam.id);
});

test.only('Should post a team', async () => {
	const owner = generate();

	const response = await axios.post('http://localhost:3000/api/teams', {
		owner,
		team: ['pikachu'],
	});

	const createdTeam = await teamsModel.getTeamById(
		response.data.createdTeam.id
	);
	expect(createdTeam.owner).toBe(owner);

	await teamsModel.deleteTeam(response.data.createdTeam.id);
});
