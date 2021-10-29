import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TransportComponent } from './transport/transport.component';
import{RoomsavailComponent} from './roomsavail/roomsavail.component';
import { BookroomComponent } from './bookroom/bookroom.component';
import { ContactComponent } from './contact/contact.component';
import { PagentfoundComponent } from './pagentfound/pagentfound.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'features',component:FeaturesComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'transport',component:TransportComponent},
  {path:'bookroom',component:BookroomComponent},
  {path:'roomsavail', component:RoomsavailComponent},
  {path:'contact',component:ContactComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:PagentfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
