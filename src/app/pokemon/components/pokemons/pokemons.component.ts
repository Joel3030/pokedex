import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { LoadingService } from '../../../shared/services/loading.service';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
	offset = 0;
	pokemons: any[] = [];

	constructor(
		private pokemonService: PokemonService,
		private loadingService: LoadingService
	) {}

	ngOnInit(): void {
		this.getPokemons();
	}

	onScroll() {
		this.offset += 20;
		this.getPokemons();
	}

	private getPokemons() {
		this.loadingService.show();
		this.pokemonService.getPokemons(this.offset).subscribe({
			next: (resp) => {
				this.pokemons = [...this.pokemons, ...resp];
				this.loadingService.hide();
			},
		});
	}
}
