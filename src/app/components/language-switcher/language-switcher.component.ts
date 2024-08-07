import { Component, OnInit } from '@angular/core';

import { LanguageSwitcherService } from '../../services/language-switcher.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  langs: Array<string> = [];
  selectedLang = '';

  constructor(private languageSwitcherService: LanguageSwitcherService) { }

  ngOnInit() {
    this.langs = this.languageSwitcherService.getLangs();
    this.selectedLang = this.languageSwitcherService.getLang();
  }

  setLang(event: Event) {
    const selectedLang = (event.target as HTMLInputElement).value;
    this.languageSwitcherService.setLang(selectedLang);
    this.selectedLang = selectedLang;
  };
}
