import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { DataService } from './provider/data/data.service';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TimelineComponent } from './timeline/timeline.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'portfolio/:id', component: PortfolioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    IntroComponent,
    MainComponent,
    PortfolioComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
