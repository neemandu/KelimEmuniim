import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/Objects/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardContent: Card;
  @Input() selected: boolean = false;
  @Output() cardSelectedEmmiter: EventEmitter<any> = new EventEmitter();
    
  constructor() { }
  
  ngOnInit() {
    // console.log("CardComponent -> card", this.cardContent)
  }
}

