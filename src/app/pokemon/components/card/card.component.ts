import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	@Input() pokemon!: any;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	goToPokemon(id: string) {
		this.router.navigate(['/pokemons/view', id]);
	}
}
