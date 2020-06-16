import { EnvService } from './../../environments/dynamic-environments/env.service';
import { JwtRequest } from './../../shared/models/JwtRequest';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { ResponseDialogService } from 'src/app/shared/services/response-dialog.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    loadingMsg: any;
    constructor(
        private env: EnvService,
        private router: Router,
        private notification: NzNotificationService,
        private http: HttpClient,
        private responseDialogService: ResponseDialogService,

    ) { }

}
