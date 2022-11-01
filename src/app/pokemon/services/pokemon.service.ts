import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, toArray, forkJoin, concatMap, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PokemonService {
	apiUrl = 'https://pokeapi.co/api/v2/pokemon';

	imageUrl =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

	constructor(private http: HttpClient) {}

	getPokemons(offset = 0) {
		return this.http.get(`${this.apiUrl}?offset=${offset}&limit=20`).pipe(
			map((data: any) => data.results),
			concatMap((results: any) => results),
			concatMap((pokemon: any) => this.getPokemonByUrl(pokemon.url)),
			toArray()
		);
	}

	getPokemon(id: string) {
		const url = `${this.apiUrl}/${id}`;

		return this.getPokemonByUrl(url);
	}

	private getPokemonByUrl(url: string) {
		return this.http.get(url).pipe(
			mergeMap((detail: any) =>
				forkJoin(
					this.getPokemonSpecies(detail.species.url),
					this.getPokemonForm(detail.forms[0].url)
				).pipe(
					map(([species, { types }]) => {
						return {
							detail,
							species,
							types,
						};
					})
				)
			),
			map((pokemon: any) => {
				const versions = pokemon.species.flavor_text_entries.filter(
					(flavor: any) =>
						flavor.version.name === 'firered' ||
						(flavor.version.name === 'shield' && flavor.language.name === 'en')
				);
				const defaultImage =
					pokemon.detail.sprites.other.dream_world.front_default;
				const sprites = Object.keys(pokemon.detail.sprites);
				const imagesUrl = sprites
					.map((spritesKey: any) => pokemon.detail.sprites[spritesKey])
					.filter((img) => img);
				return { ...pokemon, imagesUrl, defaultImage, versions };
			})
		);
	}

	private getPokemonSpecies(url: string) {
		return this.http.get(url).pipe(map((resp: any) => resp));
	}

	private getPokemonForm(url: string) {
		return this.http.get(url).pipe(map((resp: any) => resp));
	}
}
