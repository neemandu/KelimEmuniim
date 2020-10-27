import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PackInfo } from 'src/app/Objects/packs';
import { CardsService } from 'src/app/Services/cards.service';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit, OnDestroy {

  Subscription: Subscription = new Subscription();

  @Input() packInfo: PackInfo;
  fav: boolean = false;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.Subscription.add(this.cardsService.favoriteChangeEmmiter.subscribe((favorites: number[]) => {
      this.fav = favorites.includes(this.packInfo.id)
    }));
    this.fav = this.cardsService.isFavorite(this.packInfo.id)
  }

  addRemoveFavorite(): void {
    this.fav = this.cardsService.addRemoveFavorite(this.packInfo.id)
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
