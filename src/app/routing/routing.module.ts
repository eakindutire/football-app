import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import routes and routes module 
import {Routes, RouterModule} from '@angular/router';
//import home component
import { HomeComponent } from '../home/home.component';
// import about us components
import {AboutUsComponent} from '../about-us/about-us.component';
//import registerTeam component
import {RegisterTeamComponent} from '../register-team/register-team.component'
//import nav component
import { NavComponent} from '../nav/nav.component'
//import footer
import { FooterComponent } from '../footer/footer.component'


//route array for all of the components
const routes: Routes= [
  //this route make sures that it opens the
  // home component as soon as the app is started
  // so the localhost4200/home
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},


  { path: 'aboutComponent', component: AboutUsComponent},
  { path: 'registerTeamComponent', component: RegisterTeamComponent},
  { path: 'navigationComponent', component: NavComponent},
  { path: 'footerComponent', component: FooterComponent}
]
;


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //import the routes
    RouterModule.forRoot(routes)
  ],

  //export the RouterModule 
  exports: [
    RouterModule
  ],
})
export class RoutingModule { }
