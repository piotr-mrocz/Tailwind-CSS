import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallationComponent } from './components/installation/installation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ColorsComponent } from './components/colors/colors.component';
import { GradientComponent } from './components/gradient/gradient.component';
import { PaddingAndMarginComponent } from './components/padding-and-margin/padding-and-margin.component';
import { AlignComponent } from './components/align/align.component';
import { TextStyleComponent } from './components/text-style/text-style.component';
import { RoundedComponent } from './components/rounded/rounded.component';
import { ListsComponent } from './components/lists/lists.component';
import { ShadowsComponent } from './components/shadows/shadows.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { NavHamburgerComponent } from './components/nav-hamburger/nav-hamburger.component';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [
  { path: '', redirectTo: '/installation', pathMatch: 'full' },
  { path: 'installation', component: InstallationComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'gradient', component: GradientComponent },
  { path: 'padding-and-margin', component: PaddingAndMarginComponent },
  { path: 'align', component: AlignComponent },
  { path: 'text-style', component: TextStyleComponent },
  { path: 'rounded', component: RoundedComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'shadows', component: ShadowsComponent },
  { path: 'responsive', component: ResponsiveComponent },
  { path: 'nav-hamburger', component: NavHamburgerComponent },
  { path: 'container', component: ContainerComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
