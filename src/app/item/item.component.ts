import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-item',
	template: `<p>{{item}}</p>`,
})
export class ItemComponent {
	@Input() item: string;
}
