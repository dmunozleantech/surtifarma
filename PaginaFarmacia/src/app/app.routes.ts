import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component'
import {LandingPageComponent} from './landing-page/landing-page.component'

const APP_ROUTES: Routes = [
{ path: 'landing', component: LandingPageComponent},    
{ path: 'Login', component: LoginComponent},
{path: '**', pathMatch: 'full', redirectTo: 'Login'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);