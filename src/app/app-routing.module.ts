import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ObservablePracticeComponent } from './Components/observable-practice/observable-practice.component';

const appRoutes: Routes = [
  { path: 'observable-practice', component: ObservablePracticeComponent },
  {path: '', redirectTo: '/observable-practice', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}