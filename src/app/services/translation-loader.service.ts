import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class TranslationLoaderService implements TranslateLoader {
  constructor(private http: HttpClient) { }

  //Getting translations by iso code
  getTranslation(isoCode: string): Observable<any> {
    var translation = this.http.get(`assets/i18n/${isoCode}.json`);
    console.log(translation);
    return translation;
  }
}
