import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { RegisterTeamComponent } from './register-team/register-team.component';
//import nav bar
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
// For MDB Angular Pro
// import { NavbarModule, WavesModule, ButtonsModule } from 'ng-uikit-pro-standard'

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    RegisterTeamComponent,
    NavComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
