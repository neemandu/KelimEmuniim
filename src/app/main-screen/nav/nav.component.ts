import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pack } from 'src/app/Objects/pack';
import { CardsService } from 'src/app/Services/cards.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() packIdEmitted = new EventEmitter<number>();
  packIdForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.packIdForm = this.formBuilder.group({
      packId: ['', [Validators.required, Validators.min(0)]]
    })
   }

  ngOnInit() {
  }
  
  getPackById(): void {
    this.packIdEmitted.emit(this.packIdForm.value.packId);
  }

  getAllPacks(): void {

  }

}
