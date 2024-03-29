import fs from 'fs/promises';

const FILE = 'teams.json';

const createTeam = async (content: object) => {
	try {
		const prevContent = await fs.readFile(FILE, 'utf8');
		const JSONcontent = JSON.parse(prevContent);
		const index = Object.keys(JSONcontent).length + 1;
		JSONcontent[index] = content;
		const contentJSON = JSON.stringify(JSONcontent);
		await fs.writeFile(FILE, contentJSON);
		return { ...JSONcontent[index], id: index };
	} catch (err) {
		console.log('Houve um erro', err);
	}
};

const getTeams = async () => {
	try {
		const prevContent = await fs.readFile(FILE, 'utf8');
		return JSON.parse(prevContent);
	} catch (err) {
		console.log('Houve um erro', err);
	}
};

const getTeamById = async (id: string) => {
	try {
		const prevContent = await fs.readFile(FILE, 'utf8');
		const JSONcontent = JSON.parse(prevContent);
		const selectedContent = JSONcontent[id];
		return selectedContent;
	} catch (err) {
		console.log('Houve um erro', err);
	}
};
const deleteTeam = async (id: string) => {
	try {
		const prevContent = await fs.readFile(FILE, 'utf8');
		const JSONcontent = JSON.parse(prevContent);
		const selectedContent = JSONcontent[id];
		delete JSONcontent[id];
		const contentJSON = JSON.stringify(JSONcontent);
		await fs.writeFile(FILE, contentJSON);

		return selectedContent;
	} catch (err) {
		console.log('Houve um erro', err);
	}
};

export const teamsModel = { createTeam, getTeams, getTeamById, deleteTeam };
