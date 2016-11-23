import { Component, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { ItemComponent } from "./item/item.component";
import { Subject } from "rxjs";

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
	@ViewChildren(ItemComponent) items: QueryList<ItemComponent>;

	itemList: string[] = [
		'Bacon ipsum dolor amet sirloin jerky flank frankfurter filet mignon alcatra chicken meatball tenderloin swine short loin kielbasa boudin cow ground round. Leberkas pancetta ground round, rump pork loin porchetta cupim jowl ball tip sausage pastrami. Fatback picanha kevin strip steak, meatball boudin prosciutto. Beef ribs short loin beef frankfurter ground round pork loin spare ribs meatball pork belly swine jowl prosciutto venison porchetta.',
		'Pancetta hamburger chicken tenderloin, jerky jowl shankle t-bone corned beef. Pork pig kevin, cupim pork loin chuck pancetta fatback landjaeger drumstick ham hock ball tip porchetta meatloaf tail. Pancetta beef ribs shankle meatball shoulder cupim jerky spare ribs doner shank fatback pork loin filet mignon. T-bone beef ribs porchetta bacon bresaola, shank drumstick leberkas short loin. Flank brisket shankle leberkas sausage capicola. Bresaola short ribs shoulder picanha chicken flank shank pancetta venison fatback.',
		'Tail filet mignon ground round sausage jowl boudin ball tip alcatra rump turducken leberkas. Ball tip andouille filet mignon, kevin sirloin pork turkey biltong. Landjaeger tenderloin bacon shank tri-tip kielbasa short loin, ham hock strip steak t-bone. Short loin bresaola strip steak andouille turkey. Fatback tri-tip hamburger boudin.',
		'Burgdoggen ham prosciutto, drumstick shankle shoulder corned beef salami tongue andouille. Shankle shoulder ham hock turducken pig capicola. Pork chop tongue venison frankfurter beef ribs bresaola leberkas chuck brisket turducken meatloaf pancetta sirloin. Drumstick leberkas ribeye prosciutto, frankfurter hamburger jerky short ribs shankle ball tip boudin bresaola kielbasa. Prosciutto t-bone shank ham hock tongue leberkas ground round meatball burgdoggen meatloaf beef corned beef chuck. Bresaola meatloaf kevin hamburger t-bone pork loin. Turkey burgdoggen hamburger, landjaeger short loin capicola porchetta tenderloin bacon.',
		'Beef ribs chuck turkey sirloin pancetta doner pork chop meatloaf, landjaeger pig frankfurter pork. Alcatra tenderloin porchetta doner capicola short ribs, venison jowl swine chicken hamburger tri-tip bacon. Burgdoggen pork chop swine turducken sirloin corned beef hamburger spare ribs doner. Strip steak alcatra pork loin doner.',
		'Brisket biltong filet mignon shankle ham hock turkey leberkas. Shank capicola leberkas, kielbasa tri-tip pastrami pork belly strip steak sausage picanha meatloaf chicken salami. Ham hock pork loin salami pork belly bresaola, pig meatball brisket t-bone beef ground round beef ribs biltong. Prosciutto tongue hamburger, kevin bacon tail ham. Ball tip strip steak capicola salami jowl. Tenderloin corned beef turkey burgdoggen, cow kevin jerky flank.',
		'Ribeye bacon landjaeger boudin pork loin. Beef ribs drumstick ham hock, landjaeger meatloaf pastrami boudin capicola pork belly chuck biltong. Turkey sausage jerky burgdoggen short ribs bacon swine turducken drumstick ribeye shoulder ground round strip steak pork tri-tip. Turkey spare ribs chuck rump. Shankle ground round short loin pig strip steak kielbasa. Tail beef ribs bacon sirloin, ribeye rump alcatra ham sausage capicola.',
		'Shank tenderloin filet mignon porchetta. Brisket biltong chicken filet mignon pancetta landjaeger tongue. Chuck filet mignon cupim flank landjaeger boudin, pork loin tri-tip beef ribs shoulder beef. Salami tongue meatball, sirloin beef ribs porchetta chicken picanha pork chop corned beef short loin tri-tip. Chicken bresaola rump, flank prosciutto pork chop bacon meatloaf biltong. Leberkas short ribs meatloaf porchetta tongue short loin. Brisket tri-tip tongue chuck, meatloaf kielbasa rump frankfurter prosciutto cow ball tip meatball salami kevin.',
		'Landjaeger meatball ham hock, rump leberkas pastrami t-bone pork loin picanha tenderloin. Pig ribeye cow t-bone fatback doner, capicola cupim filet mignon pork loin tail. Biltong kevin t-bone bresaola swine meatball. Turkey ground round sirloin alcatra cupim. Pig spare ribs shank, beef ribs jowl shoulder porchetta burgdoggen andouille doner pastrami sirloin pork loin tri-tip.',
		'Bacon chicken pork turducken brisket kevin corned beef tri-tip short ribs rump capicola leberkas. Chicken brisket turkey, boudin hamburger pork loin beef cupim andouille meatball alcatra prosciutto tri-tip pork. Bresaola ball tip kevin, pancetta prosciutto frankfurter shankle landjaeger. T-bone pancetta doner, hamburger ground round prosciutto pig chicken pork chop beef ribs brisket burgdoggen shankle corned beef. Short ribs corned beef short loin, tongue shank spare ribs capicola biltong alcatra.'
	];
	lorem: string = "Lorem ipsum dolor sit amet, sit aperiam habemus dissentiet an, mei meis error errem cu. Ei sit iuvaret necessitatibus, per no nibh suscipiantur concludaturque, id lorem essent nec. Ius ex mundi noster facilisi, quodsi expetendis appellantur eu mei. Nam ut diceret legimus voluptatum, est scribentur philosophia ea, te nisl augue sententiae vis. Probo omnis ignota at vix, veri erant aeterno sed at, dolor incorrupte qui at. Per postea nonumes cu, ad eum volumus assueverit.";

	beforeContentChanges: Subject<any> = new Subject();
	contentChanges: Subject<any> = new Subject();

	ngAfterViewInit(): void {
		this.items.changes.subscribe(() => { this.contentChanges.next(); });
	}

	clicked() {
		this.beforeContentChanges.next();
		this.itemList.unshift(this.lorem);
	}
}
