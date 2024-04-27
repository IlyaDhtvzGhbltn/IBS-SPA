import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class TranslationLoaderService implements TranslateLoader {
  constructor(private http: HttpClient) { }

  //Getting translations by iso code
  getTranslation(lang: string): Observable<any> {
    var translation = this.http.get(`assets/i18n/${lang}.json`);
    return translation;
  }
}
