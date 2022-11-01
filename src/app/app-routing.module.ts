import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () =>
      import('@app/pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  { path: '**', redirectTo: 'pokemons' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
