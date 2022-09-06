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
import { TextStyleComponent } from './components/text-style/text-style.component';
import { RoundedComponent } from './components/rounded/rounded.component';
import { ListsComponent } from './components/lists/lists.component';

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
    TextStyleComponent,
    RoundedComponent,
    ListsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
