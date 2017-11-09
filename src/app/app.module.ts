import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComnavComponent } from './comnav/comnav.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routers';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    ComnavComponent,
    HomeComponent,
    DetailsComponent,
    AboutComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
