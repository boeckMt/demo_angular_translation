import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route1Component } from './route-components/route1/route1.component';
import { StartComponent } from './route-components/start/start.component';


export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'start', component: StartComponent,
    data: {
      title: $localize`:@@app.route: start`,
    }
  },
  {
    path: 'route1', component: Route1Component,
    data: {
      title: $localize`:@@app.route1: route1`,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
