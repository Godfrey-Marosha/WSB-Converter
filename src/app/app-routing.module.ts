import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ConverterComponent } from './components/converter/converter.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/converter',
        pathMatch: 'full',
    },
    { path: 'login', component: LoginComponent },
    { path: 'converter', component: ConverterComponent, canActivate: [AuthGuardService] },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
