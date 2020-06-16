import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-server-error',
  template: `
<nz-layout>
    <nz-header style="text-align: center;background:  linear-gradient(to right, #0dbddd 0%,#284294 100%);color: white;font-size: 16px; font-weight: bold;">
         Education Department
    </nz-header>
      <nz-layout>
        <nz-content>
          <nz-result nzStatus="500" nzTitle="Server Error!" nzSubTitle="Sorry, there might be an error or no response from the server. Please try again or contact Admin">
           <div nz-result-extra>
              <button nz-button nzType="primary" style="padding-right:10px" (click)="goBack()">Go Back</button>
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
export class PageServerErrorComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }
  goBack() {
    // window.history.back();
    this.location.back();
  }

}
