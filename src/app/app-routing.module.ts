import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'casa',
    pathMatch: 'full' 
  },
  {
    path: 'casa', 
    loadChildren: () => import('./paginas/casa/casa.module').then( m => m.CasaPageModule)
  },
  { path: 'casa', loadChildren: './paginas/casa/casa.module#CasaPageModule' },
  { path: 'galletitas', loadChildren: './paginas/galletitas/galletitas.module#GalletitasPageModule' },
  { path: 'galletita/:id', loadChildren: './paginas/galletita/galletita.module#GalletitaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
