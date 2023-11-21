import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerriesComponent } from './berries/berries.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: BerriesComponent },
  { path: 'berries', component: BerriesComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
