import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[pokemonCardType]',
})
export class PokemonCardTypeDirective {
	@Input() pokemonCardType = 'default';

	@HostBinding('class') get classes(): string {
		return `background-color-card-${this.pokemonCardType}`;
	}

	constructor() {}
}
