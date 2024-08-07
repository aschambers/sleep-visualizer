import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataAccessModule } from './components/data-access';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { SvgHelperComponent } from './components/svg-helper/svg-helper.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BerriesComponent,
    IngredientsComponent,
    SkillsComponent,
    HeaderComponent,
    RecipesComponent,
    LanguageSwitcherComponent,
    InputSearchComponent,
    SvgHelperComponent,
    MenuComponent
  ],
  exports: [
    LanguageSwitcherComponent,
    TranslateModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataAccessModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
