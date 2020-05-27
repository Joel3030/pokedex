import { Component, OnInit, Input } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  offset = 0;
  pokemons: [] = [];
  loading: boolean;
  filterPost = '';

  constructor(private pokedexService: PokedexService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.getpokemons();
  }

  getpokemons() {
    this.pokedexService.getPokemons(this.offset).subscribe((resp) => {
      this.pokemons = resp;
      this.loading = false;
    });
  }

  showPokemon(item: any) {
    let pokemonId;

    pokemonId = item.pokemonId;

    this.router.navigate(['/pokemon', pokemonId]);
  }
}
