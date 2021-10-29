import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TransportComponent } from './transport/transport.component';
import { FeaturesComponent } from './features/features.component';
import { BookroomComponent } from './bookroom/bookroom.component';
import { RoomsavailComponent } from './roomsavail/roomsavail.component';
import { PagentfoundComponent } from './pagentfound/pagentfound.component';


import { ReviewsComponent } from './reviews/reviews.component';
import { RatingComponent } from 'src/shared/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RoomsComponent,
    TransportComponent,
    FeaturesComponent,
    BookroomComponent,
    RoomsavailComponent,
    PagentfoundComponent,
    ReviewsComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
