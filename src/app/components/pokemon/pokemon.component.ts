import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon: any = {};
  allEvolutions: any = [];
  description: any = {};
  stats;

  loadingPokemon: boolean;

  constructor(
    private route: ActivatedRoute,
    private pokedexService: PokedexService
  ) {
    this.route.params.subscribe((params) => {
      this.getPokemon(params.id);
      this.getDescription(params.id);
    });
  }

  ngOnInit(): void {}

  getPokemon(id: string) {
    this.loadingPokemon = true;
    this.pokedexService.getPokemon(id).subscribe((pokemon: any) => {
      this.pokemon = pokemon;

      console.log(this.pokemon);
      this.stats = pokemon.stats;
      this.loadingPokemon = false;
    });
  }

  getAllEvolutions(id: string) {
    this.pokedexService.getAllEvolutions(id).subscribe((Evolutions) => {
      this.allEvolutions = Evolutions;
    });
  }

  getDescription(id) {
    this.pokedexService.getDescription(id).subscribe((Description) => {
      this.description = Description.split('/');
      this.getAllEvolutions(this.description[6]);
    });
  }
}
