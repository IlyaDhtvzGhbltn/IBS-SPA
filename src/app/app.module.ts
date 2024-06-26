import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslationLoaderService } from './services/translation-loader.service';
import { AlertComponent } from './components/alert/alert.component';
import { DataComponent } from './components/data/data.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './services/auth.interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AlertComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        // Main provider for loader
        provide: TranslateLoader,

        // Custom Loader
        useClass: TranslationLoaderService,

        // Dependencies will be injected into translation-loader service ctor
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
