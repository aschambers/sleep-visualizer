import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BerriesComponent,
    IngredientsComponent,
    SkillsComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
