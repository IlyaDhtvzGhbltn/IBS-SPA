import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Set translation according default language
  constructor(private translate: TranslateService) {
    //TODO Send 'en' to config
    translate.setDefaultLang('en');
  }

  //Getting language code and change apps translation
  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const languageCode = target.value;
    this.translate.use(languageCode);
  }
}
