import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[pokemonType]',
})
export class PokemonTypeDirective {
	@Input() pokemonType = 'default';

	@HostBinding('class') get classes(): string {
		return `type background-color-${this.pokemonType}`;
	}

	constructor() {}
}
