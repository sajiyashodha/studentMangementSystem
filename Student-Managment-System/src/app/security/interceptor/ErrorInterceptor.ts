import { HttpLoaderService } from './../../shared/services/http-loader.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { Observable, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private notification: NzNotificationService,
        public loaderService: HttpLoaderService

    ) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        // this.spinner.show()
        this.loaderService.show();

        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if (evt.body && evt.body.success)
                        console.log('Success Response Received');

                    // this.spinner.hide()
                    this.loaderService.hide()
                }
            }),
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    try {
                        // this.spinner.hide()
                        this.loaderService.hide()

                        if (err.status == 0) {
                            console.log('[Error Interceptor] Error Status :', err.status);
                            this.router.navigate([`500`]);

                            // this.notification.error('' + 'Server Error '+ err.status, err.statusText);

                        } else {
                            console.log('[Error Interceptor] Error Status :', err.status);
                            this.router.navigate([`500`]);

                            // this.notification.error('' + err.status, '[Error Interceptor]');
                        }

                        console.log(err);

                        if (err.status == 401) {
                            console.log('Redirect to Login');
                            // this.notification.error('' + err.status, err.message);
                            this.router.navigate([`login`]);
                        }

                        if (err.status == 403) {
                            console.log('Redirect to 403');
                            // this.notification.error('' + err.status, err.message);
                            // this.router.navigate([`login`]);
                            this.router.navigate([`403`]);
                        }
                        if (err.status == 500) {
                            console.log('Redirect to 500');
                            // this.notification.error('' + err.status, err.message);
                            // this.router.navigate([`login`]);
                            this.router.navigate([`500`]);
                        }
                    } catch (e) {
                        console.log(e);
                        this.router.navigate([`login`]);
                    }
                    //log error
                }
                return of(err);
            }));

    }



}
