import axios from 'axios';

const getPokemon = async (pokemonName: string) => {
	const URL = 'https://pokeapi.co/api/v2/pokemon/';
	try {
		const response: any = await axios.get(URL + pokemonName);
		const { name, weight, height, id } = response.data;
		const pokemon = {
			id,
			name,
			weight,
			height,
		};
		return pokemon;
	} catch (err: any) {
		console.error('Erro ao consultar API externa:', err.message);
		return;
	}
};

export const pokeAPI = {
	getPokemon,
};
