import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { CardComponent } from './components/card/card.component';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { PokemonCardTypeDirective } from './directives/pokemon-card-type.directive';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		PokemonsComponent,
		PokemonComponent,
		CardComponent,
		PokemonTypeDirective,
		PokemonCardTypeDirective,
	],
	imports: [
		CommonModule,
		PokemonRoutingModule,
		InfiniteScrollModule,
		SharedModule,
	],
})
export class PokemonModule {}
