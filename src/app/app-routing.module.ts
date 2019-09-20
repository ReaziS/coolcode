import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KukoldComponent } from './kukold/kukold.component';
import { CurrentPartyComponent } from './current-party/current-party.component';
import { AddKukoldComponent } from './add-kukold/add-kukold.component';

const routes: Routes = [
  {path: '', component: KukoldComponent, data: { title: 'Kukold party' }},
  {path: 'kukold', component: KukoldComponent, data: { title: 'Kukold party' }},
  {path: 'squad/:id', component: CurrentPartyComponent, data: { title: 'Kukold party' }},
  {path: 'newKukold', component: AddKukoldComponent, data: { title: 'Kukold party' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
