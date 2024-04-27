import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslationLoaderService } from './services/translation-loader.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        // Main provider for loader
        provide: TranslateLoader,

        // Custom Loader
        useClass: TranslationLoaderService,

        // Dependencies which helps serving loader
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
