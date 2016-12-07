import { Routes, RouterModule }  from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';

/**
 * TODO: Create a Seperate Module for Dashbaord and its children
 * So as we can treat user dashboard as a seperate module.
 */
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]}
];

export const routing = RouterModule.forRoot(routes);