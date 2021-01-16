import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { EasingLogic } from 'ngx-page-scroll-core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    BioComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule.forRoot(
      {
        duration: 500,
        _interval: 1,
        easingLogic: (t: number, b: number, c: number, d: number): number => {
          let ts: number = (t /= d) * t;
          let tc: number = ts * t;
          return b + c * (tc + -3 * ts + 3 * t);
        },
      }
    ),
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
