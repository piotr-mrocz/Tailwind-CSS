import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallationComponent } from './components/installation/installation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ColorsComponent } from './components/colors/colors.component';
import { GradientComponent } from './components/gradient/gradient.component';

const routes: Routes = [
  { path: '', redirectTo: '/installation', pathMatch: 'full' },
  { path: 'installation', component: InstallationComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'gradient', component: GradientComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
