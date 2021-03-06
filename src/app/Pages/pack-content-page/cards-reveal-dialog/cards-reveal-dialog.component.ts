import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cards-reveal-dialog',
  templateUrl: './cards-reveal-dialog.component.html',
  styleUrls: ['./cards-reveal-dialog.component.css']
})
export class CardsRevealDialogComponent implements OnInit {

  loadedCards: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
  }
  
  ngOnInit(): void {
    // console.log("CardsRevealDialogComponent -> constructor -> data", this.data)
  }

}
