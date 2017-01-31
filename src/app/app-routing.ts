import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router'

const APP_Routes: Routes = [
    {path: '', component: HomeComponent}
    ];


export const routing = RouterModule.forRoot(APP_Routes);