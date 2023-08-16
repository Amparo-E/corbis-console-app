import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { PerspectivesComponent } from './perspectives/perspectives.component';          
import { HttpClientModule } from '@angular/common/http';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { SuperiorNavbarComponent } from './superior-navbar/superior-navbar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectivesComponent,
    PerspectivesComponent,
    LeftSideBarComponent,
    SuperiorNavbarComponent,
    RightSideBarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }