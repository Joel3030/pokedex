import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { LoadingService } from '../../../shared/services/loading.service';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
	pokemon: any = {};

	type: string = '';

	isLoading$ = this.loadingService.isLoading$;

	constructor(
		private pokemonService: PokemonService,
		private route: ActivatedRoute,
		private loadingService: LoadingService
	) {}

	ngOnInit(): void {
		this.getParam();
	}

	private getParam(): void {
		this.route.paramMap.subscribe((params) => {
			const id = params.get('id');
			if (id) {
				this.getPokemon(id);
			}
		});
	}

	private getPokemon(id: string): void {
		this.loadingService.show();
		this.pokemonService.getPokemon(id).subscribe({
			next: (resp: any) => {
				this.pokemon = resp;
				this.type = this.pokemon.types[0].type.name;
				this.loadingService.hide();
			},
			error: (err) => console.error(err),
		});
	}
}
