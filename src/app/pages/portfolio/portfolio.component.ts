import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  loadingError: Boolean = false;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('projects').valueChanges().subscribe(
      proj => {
        this.projects = proj;
        this.loadingError = false;
      },
      err => {
        this.loadingError = true;
      });
  }

  reloadPage() {
    window.location.reload();
  }
}
