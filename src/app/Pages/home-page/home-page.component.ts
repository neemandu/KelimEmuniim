import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PackInfo } from 'src/app/Objects/packs';
import { CardsService } from 'src/app/Services/cards.service';
import { OverlaySpinnerService } from 'src/app/Services/overlay-spinner.service';

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
  loadedPacks: number;

  //Filters
  freeTextFilterSelected: string = '';
  selectedCategories: string[] = [];
  selectedFavorites: string[] = [];
  // selectedTags: string[] = [];

  constructor(private cardsService: CardsService, private overlaySpinnerService: OverlaySpinnerService) {
    this.overlaySpinnerService.changeOverlaySpinner(true);
  }

  ngOnInit(): void {
    this.loadedPacks = 0;
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
        // console.log("HomePageComponent -> ngOnInit -> this.allPacks", this.allPacks)
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

  packLoaded(): void {
    this.loadedPacks++;
    if (this.loadedPacks == this.allPacks.length) {
      console.log("HomePageComponent -> packLoaded -> this.loadedPacks", this.loadedPacks)
      this.overlaySpinnerService.changeOverlaySpinner(false);
    }
  }

  getAllFavoritesDesc(): string[] {
    return this.cardsService.allPacks ? (this.cardsService.allPacks.filter(pack => this.allFavorites.includes(pack.id))).map(pack => pack.description) : (this.allPacks.filter(pack => this.allFavorites.includes(pack.id))).map(pack => pack.description);
  }

  filterPacks(): void {
    this.loadedPacks = 0;
    this.allPacks = this.cardsService.allPacks.map(pack => pack);
    if (this.freeTextFilterSelected !== '') {
      this.freeTextFilter();
    }
    if (this.selectedCategories.length != 0) {
      this.categoryFilter();
    }
    if (this.selectedFavorites.length != 0) {
      this.favoritesFilter()
    }
    // console.log("HomePageComponent -> filterPacks -> this.allPacks", this.allPacks)
  }

  freeTextFilter(): void {
    this.allPacks = this.allPacks.filter((pack: PackInfo) => {
      if (pack.description.includes(this.freeTextFilterSelected))
        return true;
      pack.categories.forEach(category => {
        if (category.includes(this.freeTextFilterSelected))
          return true;
      })
      pack.tags.forEach(tag => {
        if (tag.includes(this.freeTextFilterSelected))
          return true;
      })
      return false;
    })
  }

  categoryFilter(): void {
    this.allPacks = this.allPacks.filter((pack: PackInfo) => {
      let res = false;
      pack.categories.forEach(category => {
        if (this.selectedCategories.includes(category)) {
          res = true;
        }
      })
      return res;
    })
  }

  favoritesFilter(): void {
    this.allPacks = this.allPacks.filter((pack: PackInfo) => {
      return this.selectedFavorites.includes(pack.description);
    })
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

}
