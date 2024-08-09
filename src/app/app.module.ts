import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DataAccessModule } from './components/data-access';

import { AppComponent } from './app.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
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
    InputSearchComponent,
    SvgHelperComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
