import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewContaComponent } from '../components/new-conta/new-conta.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
