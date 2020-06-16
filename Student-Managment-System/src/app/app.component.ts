import { EnvService } from './environments/dynamic-environments/env.service';
import { Subject } from 'rxjs';
import { HttpLoaderService } from './shared/services/http-loader.service';
import { Router, NavigationStart, Event, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  showHeaderFooter: boolean;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private router: Router,
    public loaderService: HttpLoaderService,
    private env: EnvService,

  ) {
    this.router.events.subscribe((val) => {
      //  To display seperate header and footer
      if (
        this.router.url === '/home'
      ) {
        this.showHeaderFooter = true;
      } else {
        this.showHeaderFooter = false;
      }
    });

    this.router.events.subscribe((rEvent: Event) => {
      if (rEvent instanceof NavigationStart) {
      }
      if (rEvent instanceof NavigationEnd) {
      }
      window.scrollTo(0, 0)

    });
  }

  ngOnInit() {
  }
}