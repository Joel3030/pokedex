import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LoadingComponent, NavbarComponent],
	imports: [CommonModule, RouterModule],
	exports: [LoadingComponent, NavbarComponent],
})
export class SharedModule {}
