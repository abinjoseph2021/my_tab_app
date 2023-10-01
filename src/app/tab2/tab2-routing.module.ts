import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { RouterModule, Routes } from '@angular/router';
import { Tab5Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RouterModule2]
})
export class Tab2PageRoutingModule {}
