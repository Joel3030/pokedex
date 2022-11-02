import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[noImage]',
})
export class NoImageDirective {
	@HostListener('error')
	setDefaultImage() {
		this.elementRef.nativeElement.src = 'assets/images/noImage.webp';
	}

	constructor(private elementRef: ElementRef) {}
}
