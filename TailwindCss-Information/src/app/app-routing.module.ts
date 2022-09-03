import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallationComponent } from './components/installation/installation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ColorsComponent } from './components/colors/colors.component';

const routes: Routes = [
  { path: '', redirectTo: '/installation', pathMatch: 'full' },
  { path: 'installation', component: InstallationComponent },
  { path: 'colors', component: ColorsComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
