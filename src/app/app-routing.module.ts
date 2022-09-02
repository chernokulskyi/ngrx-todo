import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { todoRoutes } from "./modules/todo/routes";

const routes: Routes = [
  { path: '**', redirectTo: '/' },
  ...todoRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
