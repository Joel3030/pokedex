import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoadingService {
	isLoading$ = new BehaviorSubject<boolean>(false);

	constructor() {}

	show(): void {
		setTimeout(() => {
			this.isLoading$.next(true);
		}, 0);
	}

	hide(): void {
		setTimeout(() => {
			this.isLoading$.next(false);
		}, 0);
	}
}
