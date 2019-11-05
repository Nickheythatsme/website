import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeHeroComponent } from './welcome-hero/welcome-hero.component';
import { FoldableHeroComponent } from './foldable-hero/foldable-hero.component';
import { HeroContents } from './foldable-hero/hero-contents';
import { HeroListComponent } from './hero-list/hero-list.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeHeroComponent,
    FoldableHeroComponent,
    HeroListComponent,
    ImageViewerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
