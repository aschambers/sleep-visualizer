import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerriesComponent } from './pages/berries/berries.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: BerriesComponent },
  { path: 'berries', component: BerriesComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'recipes', component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
