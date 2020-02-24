import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontend/layout/header/header.component';
import { FrontendComponent } from './frontend/frontend.component';
import { FooterComponent } from './frontend/layout/footer/footer.component';
import { SidebarComponent } from './frontend/layout/sidebar/sidebar.component';
import { ContactusComponent } from './frontend/contactus/contactus.component';
import { EventsComponent } from './frontend/events/events.component';
import { AboutComponent } from './frontend/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontendComponent,
    FooterComponent,
    SidebarComponent,
    ContactusComponent,
    EventsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
