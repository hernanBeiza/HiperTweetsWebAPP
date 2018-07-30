import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TweetsComponent } from './tweets/tweets.component';
/*
import { RecepcionistaComponent } from './paginas/recepcionista/recepcionista.component';
import { LoginComponent } from './paginas/login/login.component';
*/
//import { AdminModule } from './paginas/admin/admin.module';
//import { RecepcionistaModule } from './paginas/recepcionista/recepcionista.module';

const routes: Routes = [
  //{ path: 'admin',              loadChildren: ()=> AdminModule },
  //{ path: 'recepcionista',      loadChildren: ()=> RecepcionistaModule },
  { path: '',                   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio',              component: TweetsComponent }
  // { path: '**',        component: NotFoundComponent },
];
/*
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
*/
//export class AppRoutingModule { }
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes,{ useHash: true });