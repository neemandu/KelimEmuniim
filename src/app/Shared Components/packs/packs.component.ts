import { Component, OnInit } from '@angular/core';
import { Pack } from '../pack/pack.component';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {

  packs: Pack[];

  constructor() { }

  ngOnInit() {
  }

}
