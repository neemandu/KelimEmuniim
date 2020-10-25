import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}

export class Card {
  imgUrl: string;

// constructor($imgUrl: string) {
// 	this.imgUrl = $imgUrl;
  // }
  
  constructor(){}

  deseralize(input: any){
      Object.assign(this, input);
      return this;
  }
}
