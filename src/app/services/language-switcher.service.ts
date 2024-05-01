import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageSwitcherService {
  // langs: Array<string> = ['English', 'Espanol', 'Deutsch'];
  langs: Array<string> = ['English', 'Español', 'Deutsch'];
  selectedLang = localStorage.getItem('selectedLang') || 'English';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.selectedLang);
    translate.addLangs(this.langs);
    translate.use(this.selectedLang);
  }

  setLang(selectedLang: string) {
    this.translate.use(selectedLang);
    console.log('here??');
    localStorage.setItem('selectedLang', selectedLang);
  };

  getLang() {
    return this.selectedLang;
  };

  getLangs() {
    this.langs = ['English', 'Español', 'Deutsch'];
    return this.langs;
  };
}
