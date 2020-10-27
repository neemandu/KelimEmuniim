import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PackInfo } from 'src/app/Objects/packs';
import { CardsService } from 'src/app/Services/cards.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  Subscription: Subscription = new Subscription();

  allPacks: PackInfo[] = [];
  allCategories: string[] = [];
  allFavorites: number[] = [];

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.Subscription.add(this.cardsService.favoriteChangeEmmiter.subscribe((favorites: number[]) => {
      this.allFavorites = favorites
    }));
    if (!this.cardsService.allPacks) {
      var allPacksSub = this.cardsService.getAllCardPacks().subscribe((res: any) => {
        allPacksSub.unsubscribe();
        this.allPacks = res.body.map(body => {
          body.categories.forEach(category => {
            if (!this.allCategories.includes(category))
              this.allCategories.push(category);
          });
          return new PackInfo().deseralize(body)
        });
        this.cardsService.allPacks = this.allPacks.map(pack => pack);
        this.cardsService.allCategories = this.allCategories.map(category => category);
        this.allFavorites = this.cardsService.favorites;
      }, error => {
        let snackBarRef = this.cardsService._snackBar.open('שגיאה במשיכת חפיסות הקלפים, נסו שנית', 'רענן', {
          duration: 20000,
        });
        snackBarRef.onAction().subscribe(() => {
          window.location.reload();
        });
      });
    } else {
      this.allPacks = this.cardsService.allPacks;
      this.allCategories = this.cardsService.allCategories;
      this.allFavorites = this.cardsService.favorites
    }
  }

  getAllFavoritesDesc(): string[] {
    // var existing = this.allPacks.filter(pack => this.allFavorites.includes(pack.id));
    // return existing.map(pack=> pack.description);
    return (this.allPacks.filter(pack => this.allFavorites.includes(pack.id))).map(pack => pack.description);
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

}
