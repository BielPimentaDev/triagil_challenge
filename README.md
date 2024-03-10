# Desafio Triágil

##Introduçâo
Esse repositório é dedicado para resolver o desafio proposto no link: https://github.com/triagilbr/desafio-triagil

##Endpoints disponível

## Get
### /api/teams
retorna todos os times até entao criados. 
Exemplo:
  {
	"1": {
		"owner": "Ash",
		"pokemons": [
			{
				"id": 25,
				"name": "pikachu",
				"weight": 60,
				"height": 4
			},
			{
				"id": 9,
				"name": "blastoise",
				"weight": 855,
				"height": 16
			}
		]
	},
}

## GET:id 
### /api/teams/:id
retorna uma determinada equipe baseada no seu id.

## POST
### /api/teams
Executar um post nesse endpoint cria uma nova equipe com um nome do dono da equipe e a lista de pokemons.
Exemplo de uma requisiçâo:
  {
	"owner": "Ash",
	"team": ["charmander", "blastoise"]
}


## Documentaçâo
A documentação dese projeto foi criada usando Swagger. Pode ser acessada no endpoint: /api-docs

<p align="center">
  <img src="imgs/documentation.png" alt="drawing" height="300"/>
</p>

##Testes
Todos os endpoint mencionados foram testados usando a biblioteca jest para garantir que estejan funcionando de forma apropriada.
<p align="center">
  <img src="test.png" alt="drawing" height="300"/>
</p>

##Inicializar o projeto
Basta rodar o comando: 
docker build -t triagil_challenger
docker run -p 3000:3000 triagil_challenger

##Obrigado por acompanhar!
Agradeço a oportunidade de participar deste desafio, pude colocar em prática meus conhecimentos e aprender mais.
Acompanhe para mais projetos
