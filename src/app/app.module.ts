import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MaintainScrollPositionDirective } from './directives/maintain-scroll-position.directive';

@NgModule({
	declarations: [
		AppComponent,
		ItemComponent,
		MaintainScrollPositionDirective
	],
	imports: [BrowserModule],
	bootstrap: [AppComponent],
})
export class AppModule {
}
