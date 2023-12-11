import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './components/promise/promise.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/promise',
    pathMatch: 'full'
  },
  {
    path: 'promise',
    component: PromiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
