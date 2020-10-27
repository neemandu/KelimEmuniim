import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackContent } from 'src/app/Objects/packs';
import { CardsService } from 'src/app/Services/cards.service';
import { CardComponent } from 'src/app/Shared Components/card/card.component';

@Component({
  selector: 'app-pack-content-page',
  templateUrl: './pack-content-page.component.html',
  styleUrls: ['./pack-content-page.component.css']
})
export class PackContentPageComponent implements OnInit {

  id: any;
  pack: PackContent;
  selectedCards: any[] = []

  constructor(public route: ActivatedRoute, private cardsService: CardsService) {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
  }

  ngOnInit(): void {
    var packByIdSub = this.cardsService.getPackById(this.id).subscribe((res: any) => {
      packByIdSub.unsubscribe();
      this.pack = new PackContent().deseralize(res.body);
    }, error => {
      let snackBarRef = this.cardsService._snackBar.open('שגיאה במשיכת חפיסת הקלפים, נסו שנית', 'רענן', {
        duration: 20000,
      });
      snackBarRef.onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }

  cardSelected(card: CardComponent): void {
    if(this.selectedCards.includes(card))
      this.selectedCards.splice(this.selectedCards.findIndex(existingCard => existingCard == card), 1)
    else{
      if(this.selectedCards.length < 5)
        this.selectedCards.push(card)
    }
  }

}
