import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Shared Components/card/card.component';
import { PackBackComponent, PackComponent } from './Shared Components/pack/pack.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NavComponent } from './main-screen/nav/nav.component';
import { BottomBarComponent } from './main-screen/bottom-bar/bottom-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipListViewPipe } from './Shared Components/Pipes/tooltip-list-view.pipe';
import { CardsRevealDialogComponent } from './Pages/pack-content-page/cards-reveal-dialog/cards-reveal-dialog.component';
import { RandomCardRevealDialogComponent } from './Pages/pack-content-page/random-card-reveal-dialog/random-card-reveal-dialog.component';
import { TransitionGroupComponent, TransitionGroupItemDirective } from './Pages/pack-content-page/transition-group';
import { OverlaySpinnerComponent } from './main-screen/overlay-spinner/overlay-spinner.component';
import { LoginComponent } from './main-screen/user-related/user-related-dialog/login/login.component';
import { RegisterComponent } from './main-screen/user-related/user-related-dialog/register/register.component';
import { UserRelatedDialogComponent } from './main-screen/user-related/user-related-dialog/user-related-dialog.component';

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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PackComponent,
    PackBackComponent,
    MainScreenComponent,
    NavComponent,
    BottomBarComponent,
    HomePageComponent,
    AboutPageComponent,
    ShoppingCartPageComponent,
    PackContentPageComponent,
    TooltipListViewPipe,
    CardsRevealDialogComponent,
    OverlaySpinnerComponent,
    RandomCardRevealDialogComponent,
    TransitionGroupComponent,
    TransitionGroupItemDirective,
    LoginComponent,
    RegisterComponent,
    UserRelatedDialogComponent
  ],
  imports: [
    // MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    //Material
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CardsRevealDialogComponent, RandomCardRevealDialogComponent, UserRelatedDialogComponent]

})
export class AppModule { }
