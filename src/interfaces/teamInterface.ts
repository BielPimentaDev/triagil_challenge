export interface PokemonInterface {
	id: number;
	name: string;
	weight: number;
	height: number;
}

export interface TeamInterface {
	owner: string;
	pokemons: PokemonInterface[];
}
