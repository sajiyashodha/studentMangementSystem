import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-authorized',
  template: `

<nz-layout>
    <nz-header style="text-align: center;background:  linear-gradient(to right, #0dbddd 0%,#284294 100%);color: white;font-size: 16px; font-weight: bold;">
    Education Department
    </nz-header>
      <nz-layout>
        <nz-content>
          <nz-result  style="background-color: white;" nzStatus="403" nzTitle="Not Authorized" nzSubTitle="Sorry, you are not authorized to access this page or there might be a connection issue. Please try again or contact Admin">
            <div nz-result-extra>
              <button nz-button nzType="primary" routerLink="/login" >Go To Login</button>
            </div>
          </nz-result>
        </nz-content>
      </nz-layout>
    <nz-footer style="text-align: center;">Informatics International Limited ©2019 </nz-footer>
</nz-layout>
     
  `,
  styleUrls: []
})
export class PageNotAuthorizedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
