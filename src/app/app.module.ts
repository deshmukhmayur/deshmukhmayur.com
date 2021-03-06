import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {
  MdcToolbarModule,
  MdcListModule,
  MdcMenuModule,
  MdcButtonModule,
  MdcCardModule,
  MdcLinearProgressModule,
  MdcFabModule,
  MdcIconModule
} from '@angular-mdc/web';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'portfolio', component: PortfolioComponent,
    data: { title: 'My Portfolio' }
  },
  {
    path: 'contact', component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'blog',
    component: UnderConstructionComponent,
    data: { title: 'My Blog' }
  },
  {
    path: '**', component: NotFoundComponent,
    data: { title: 'Not Found' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    BlogComponent,
    UnderConstructionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MdcToolbarModule,
    MdcListModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcCardModule,
    MdcLinearProgressModule,
    MdcIconModule,
    MdcFabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
