import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
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
