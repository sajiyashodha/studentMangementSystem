import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
 <nz-layout>
    <nz-header style="text-align: center;background:  linear-gradient(to right, #0dbddd 0%,#284294 100%);color: white;font-size: 16px; font-weight: bold;">
    Education Department
    </nz-header>
      <nz-layout>
        <nz-content>
          <nz-result nzStatus="404" nzTitle="Page Not Found!" nzSubTitle="Sorry, the page you visited does not exist.">
            <div nz-result-extra>
               <button nz-button nzType="primary" routerLink="/home" >Back Home</button>
            </div>
          </nz-result>
        </nz-content>
      </nz-layout>
    <nz-footer style="text-align: center;">Informatics International Limited ©2019 </nz-footer>
</nz-layout> 
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
