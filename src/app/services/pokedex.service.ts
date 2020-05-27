import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  url = 'https://pokeapi.co/api/v2/';
  imageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemons(offset: number) {
    return this.http.get(`${this.url}pokemon?offset=${offset}&limit=807`).pipe(
      map((data: any) => data.results),
      map((pokemons) => {
        return pokemons.map((data, index) => {
          data.image = this.getImage(index + offset + 1);
          data.pokemonId = offset + index + 1;
          return data;
        });
      })
    );
  }

  getImage(index) {
    return `${this.imageUrl}${index}.png`;
  }

  getPokemon(id: string) {
    return this.http.get(`${this.url}pokemon/${id}`).pipe(
      map((data: any) => {
        const sprites = Object.keys(data.sprites);
        data.images = sprites
          .map((spriteskey: any) => data.sprites[spriteskey])
          .filter((img) => img);
        return data;
      })
    );
  }

  getAllEvolutions(id) {
    return this.http.get(`${this.url}evolution-chain/${id}`).pipe(
      map((data: any) => {
        return this.Evolution(data);
      })
    );
  }

  getDescription(id) {
    return this.http
      .get(`${this.url}pokemon-species/${id}`)
      .pipe(map((data: any) => data.evolution_chain.url));
  }

  Evolution(data) {
    const evoChain = [];
    let evoData = data.chain;

    do {
      const numberOfEvolutions = evoData.evolves_to.length;

      evoChain.push({
        species_name: evoData.species.name,
        urlId: evoData.species.url.split('/')[6],
        image: this.getImage(evoData.species.url.split('/')[6]),
      });

      if (numberOfEvolutions > 1) {
        for (let i = 1; i < numberOfEvolutions; i++) {
          evoChain.push({
            species_name: evoData.evolves_to[i].species.name,
            urlId: evoData.evolves_to[i].species.url.split('/')[6],
            image: this.getImage(
              evoData.evolves_to[i].species.url.split('/')[6]
            ),
          });
        }
      }

      evoData = evoData.evolves_to[0];
      // tslint:disable-next-line: triple-equals
    } while (evoData != undefined && evoData.hasOwnProperty('evolves_to'));

    return evoChain;
  }
}
