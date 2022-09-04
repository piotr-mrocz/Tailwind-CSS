import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InstallationComponent } from './components/installation/installation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ColorsComponent } from './components/colors/colors.component';
import { GradientComponent } from './components/gradient/gradient.component';
import { PaddingAndMarginComponent } from './components/padding-and-margin/padding-and-margin.component';
import { AlignComponent } from './components/align/align.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InstallationComponent,
    PageNotFoundComponent,
    ColorsComponent,
    GradientComponent,
    PaddingAndMarginComponent,
    AlignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
