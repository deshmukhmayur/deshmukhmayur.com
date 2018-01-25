import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { environment } from '../environments/environment';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mayur Deshmukh';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(event => {
        let title = this.title;
        if (event['title'] != null) {
          title = event['title'] + ' | ' + title;
        }
        this.titleService.setTitle(title);

        // console.log(this.titleService.getTitle(), window.location.href);

        if (environment.production) {
          // console.log('Google Analytics');
          // Google Analytics
          gtag('config', 'UA-70443889-2', {
            'page_title': this.titleService.getTitle(),
            'page_location': window.location.href,
            'page_path': event.urlAfterRedirects
          });
        }
      });
  }
}
