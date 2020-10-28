import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PackContent } from 'src/app/Objects/packs';
import { CardsService } from 'src/app/Services/cards.service';
import { OverlaySpinnerService } from 'src/app/Services/overlay-spinner.service';
import { CardComponent } from 'src/app/Shared Components/card/card.component';
import { CardsRevealDialogComponent } from './cards-reveal-dialog/cards-reveal-dialog.component';

@Component({
  selector: 'app-pack-content-page',
  templateUrl: './pack-content-page.component.html',
  styleUrls: ['./pack-content-page.component.css']
})
export class PackContentPageComponent implements OnInit {

  id: any;
  pack: PackContent;
  selectedCards: any[] = []
  loadedCards: number = 0;

  constructor(public route: ActivatedRoute, private cardsService: CardsService, public dialog: MatDialog, private overlaySpinnerService: OverlaySpinnerService) {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.overlaySpinnerService.changeOverlaySpinner(true);
  }

  ngOnInit(): void {
    // this.overlaySpinnerService.changeOverlaySpinner(true);
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

  cardSelected(card: CardComponent, index: number): void {
    if (this.selectedCards.includes(card)) {
      this.selectedCards.splice(this.selectedCards.findIndex(existingCard => existingCard == card), 1)
      card.index = undefined;
    }
    else {
      if (this.selectedCards.length < 5)
        this.selectedCards.push(card)
      card.index = index;
    }
  }

  shuffle(): void {
    this.selectedCards = [];
    this.pack.cards.sort(() => Math.random() - 0.5);
  }

  openChosenCardsModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    // dialogConfig.maxWidth = '28vw';
    dialogConfig.maxHeight = '80vh';
    dialogConfig.data = this.selectedCards;
    const dialogRef = this.dialog.open(CardsRevealDialogComponent, dialogConfig);
    var dialogSub = dialogRef.afterClosed().subscribe(() => {
      dialogSub.unsubscribe();
    });
  }

  cardLoaded(): void {
    this.loadedCards ++;
    if(this.loadedCards == this.pack.cards.length){
      this.overlaySpinnerService.changeOverlaySpinner(false);
    }
  }

}
