import { Routes } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { ClientComponent } from './client/client.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: `home`,
        component: HomeComponent,
        title: `Home`,
    },

    {
        path: ``,
        redirectTo: `/home`, pathMatch: `full`,
    },

    {
        path: `schMeeting`,
        component: MeetingComponent,
        title: `Schedule Client Meeting`,
    },

    {
        path: `clients`,
        component: ClientComponent,
        title: `Client List`,
    }

];
