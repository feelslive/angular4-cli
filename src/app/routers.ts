import { ComnavComponent } from './comnav/comnav.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component'
import { Routes } from '@angular/router';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Details/:id', component: DetailsComponent },
  { path: 'About', component: AboutComponent }
];