import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SummaryComponent } from './shared/components/summary/summary.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { BrandsComponent } from './shared/components/brands/brands.component';
import { TESTIMONIALComponent } from './shared/components/testimonial/testimonial.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { AboutComponent } from './shared/components/about/about.component';
import { PortfolioComponent } from './shared/components/portfolio/portfolio.component';
import { ProcessComponent } from './shared/components/process/process.component';
import { DevelopmentComponent } from './shared/components/development/development.component';
import { FaqComponent } from './shared/components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    HomeComponent,
    BlogComponent,
    FooterComponent,
    SummaryComponent,
    ContactUsComponent,
    BrandsComponent,
    TESTIMONIALComponent,
    SkillsComponent,
    SliderComponent,
    ServicesComponent,
    AboutComponent,
    PortfolioComponent,
    ProcessComponent,
    DevelopmentComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
