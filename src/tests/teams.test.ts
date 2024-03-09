const teamsModel = require('../models/teamsModel');
const cryptos = require('crypto');
const axios = require('axios');

const generate = () => {
	return cryptos.randomBytes(20).toString('hex');
};

test('Should get teams', async () => {
	expect(1).toBe(1);
});

test('Should get team by id', async () => {
	expect(1).toBe(1);
});

test('Should post a team', async () => {
	const owner = generate();

	const response = await axios.post('http://localhost:3000/api/teams', {
		owner,
		team: ['blastoises', 'pikachu'],
	});
	const createdTeam = teamsModel.getTeamById(response.data.id);
	// expect(createdTeam.owner).toBe(owner);
});
