import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import("./private/private.module").then(m => m.PrivateModule)
  },
  {
    path: '',
    loadChildren: () => import("./public/public.module").then(m => m.PublicModule)
  },
  {
    path: 'login',
    loadChildren: () => import("./public/login/login.module").then(m =>m.LoginModule)
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
