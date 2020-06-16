// Angular Imports  ==========================================
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import en from '@angular/common/locales/en';
import {SlideshowModule} from 'ng-simple-slideshow';


registerLocaleData(en);

// NG-ZORRO Imports ==========================================
import { IconsProviderModule } from './shared/modules/icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US, NZ_MESSAGE_CONFIG, NzConfigService, NzConfig, NZ_CONFIG } from 'ng-zorro-antd';


// PrimgNG Imports ==========================================
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { AccordionModule } from 'primeng/accordion';

// Other Services and module imports ==========================================
import { EnvServiceProvider } from './environments/dynamic-environments/env.service.provider';
import { AuthGuard } from './security/guard/auth.guard';
import { HttpLoaderService } from './shared/services/http-loader.service';
import { ConfirmationDialogService, NzModalCustomComponent } from './shared/services/confirmation-dialog.service';
import { ResponseDialogService } from './shared/services/response-dialog.service';
import { ErrorInterceptor } from './security/interceptor/ErrorInterceptor';
import { JwtInterceptor } from './security/interceptor/jwt.interceptor';
import { OnlynumberDirective } from './shared/modules/OnlynumberDirective';

// Component Pages Import ==========================================
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { PageNotAuthorizedComponent } from './shared/pages/page-not-authorized/page-not-authorized.component';
import { PageServerErrorComponent } from './shared/pages/page-server-error/page-server-error.component';
import { HomeComponent } from './pages/home/home.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { ResultComponent } from './pages/result/result.component';

// Global Configs
const ngZorroConfig: NzConfig = {
  message: { nzTop: 66 },
  notification: { nzTop: 24 }
};

@NgModule({
  declarations: [
    AppComponent,
    NzModalCustomComponent,
    PageNotFoundComponent,
    OnlynumberDirective,
    PageNotAuthorizedComponent,
    PageServerErrorComponent,
    HomeComponent,
    CalenderComponent,
    ResultComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonModule,
    KeyFilterModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
    AccordionModule,
    SlideshowModule
  ],
  providers: [
    EnvServiceProvider,
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    HttpLoaderService,
    ConfirmationDialogService,
    ResponseDialogService,
    AuthGuard

  ],
  entryComponents: [
    NzModalCustomComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
