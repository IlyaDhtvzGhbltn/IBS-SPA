import { Component, ChangeDetectorRef } from '@angular/core';
import { TranslationLoaderService } from '../../services/translation-loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private translationService: TranslationLoaderService,
    private cdr: ChangeDetectorRef // Внедряем ChangeDetectorRef
)
  {

  }

  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const languageCode = target.value;
    this.translationService.getTranslation(languageCode)
      .subscribe(response => {
        // Подписываемся на Observable и обрабатываем ответ
        console.log(response); // Выводим ответ в консоль для отладки
        // Здесь можно добавить логику обновления перевода в вашем приложении
        this.cdr.detectChanges(); // Используйте detectChanges()

      });
  }
}
