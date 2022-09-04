import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallationComponent } from './components/installation/installation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ColorsComponent } from './components/colors/colors.component';
import { GradientComponent } from './components/gradient/gradient.component';
import { PaddingAndMarginComponent } from './components/padding-and-margin/padding-and-margin.component';
import { AlignComponent } from './components/align/align.component';
import { TextStyleComponent } from './components/text-style/text-style.component';

const routes: Routes = [
  { path: '', redirectTo: '/installation', pathMatch: 'full' },
  { path: 'installation', component: InstallationComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'gradient', component: GradientComponent },
  { path: 'padding-and-margin', component: PaddingAndMarginComponent },
  { path: 'align', component: AlignComponent },
  { path: 'text-style', component: TextStyleComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
