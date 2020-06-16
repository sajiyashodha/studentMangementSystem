import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
const exceptionList: Array<any> = ['/assets/'];

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    private notification: NzNotificationService;
    private router: Router;


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        let userObject = sessionStorage.getItem('currentUser');
        if (userObject) {
            const accessToken = sessionStorage.getItem('t');

            // console.log('Attaching Token : xxxx----xxxx');
            // console.log('[HttpRequest] Attaching Token...');
            if (accessToken) {
                const cloned = req.clone({
                    // headers: req.headers.set("Authorization", "Bearer " + accessToken)
                    headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
                        .set('Project', 'C')

                });
                // console.log(cloned);

                // console.log('[HttpRequest] Token Attached');

                return next.handle(cloned).pipe(catchError((error, caught) => {

                    if (error.status === 401) {
                        this.notification.error(error.status, 'JWT Interceptor');

                    }
                    if (error.status === 403) {
                        // this.notification.error(error.status, 'JWT Interceptor');
                        console.log('Redirect to Login');
                        // this.router.navigate([`login`]);
                        this.router.navigate([`403`]);
                    }
                    return of(error);
                }) as any);




            }
            else {

                console.error('[HttpRequest] Token Not Attached');
                return next.handle(req);
            }
        }
        return next.handle(req);





    }


}