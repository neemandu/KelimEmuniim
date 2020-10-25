import { Component, OnInit } from '@angular/core';
import { Pack } from '../Objects/pack';
import { CardsService } from '../Services/cards.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(private service: CardsService) { }

  ngOnInit() {
  }

  getPackById(id: number): void {
    this.service.getPackById(id).subscribe(res => {
      var pack = new Pack().deseralize(res.body);
      console.log("MainScreenComponent -> getPackById -> pack", pack)
    }, error => {
      console.log(error);
    });
  }
}
