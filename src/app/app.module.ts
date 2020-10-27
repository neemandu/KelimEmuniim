import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Shared Components/card/card.component';
import { PackComponent } from './Shared Components/pack/pack.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NavComponent } from './main-screen/nav/nav.component';
import { BottomBarComponent } from './main-screen/bottom-bar/bottom-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ShoppingCartPageComponent } from './Pages/shopping-cart-page/shopping-cart-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PackContentPageComponent } from './Pages/pack-content-page/pack-content-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PackComponent,
    MainScreenComponent,
    NavComponent,
    BottomBarComponent,
    HomePageComponent,
    AboutPageComponent,
    ShoppingCartPageComponent,
    PackContentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //Material
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
