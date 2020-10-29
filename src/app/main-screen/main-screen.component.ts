import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardsService } from '../Services/cards.service';
import { OverlaySpinnerService } from '../Services/overlay-spinner.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();
  showSpinner: boolean = false;

  constructor(private overlaySpinnerService: OverlaySpinnerService) { }

  ngOnInit() {
    this.subs.add(this.overlaySpinnerService.changeOverlaySpinnerEmmiter.subscribe((show: boolean) => this.showSpinner = show));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
