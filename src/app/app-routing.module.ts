import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { ContactusComponent } from './frontend/contactus/contactus.component';
import { EventsComponent } from './frontend/events/events.component';
import { AboutComponent } from './frontend/about/about.component';

const routes: Routes = [
							{ path: '', component: FrontendComponent },
							{ path: 'contact-us', component: ContactusComponent },
							{ path: 'events', component: EventsComponent },
							{ path: 'about', component: AboutComponent }
						];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
