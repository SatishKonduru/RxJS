import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ObsListComponent } from './components/observable/obs-list/obs-list.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/promise',
    pathMatch: 'full'
  },
  {
    path: 'promise',
    component: PromiseComponent
  },
  {
    path: 'observable',
    children: [
      {
        path:'',
        component: ObsListComponent
      },
      {
        path: 'fromEvent',
        component: FromEventComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
