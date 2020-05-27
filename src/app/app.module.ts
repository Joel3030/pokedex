import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPipe } from './pipes/filter.pipe';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { SpacePipe } from './pipes/space.pipe';
import { EvolutionsComponent } from './shared/evolutions/evolutions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    NavbarComponent,
    LoadingComponent,
    FilterPipe,
    PieChartComponent,
    NoImagePipe,
    SpacePipe,
    EvolutionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
