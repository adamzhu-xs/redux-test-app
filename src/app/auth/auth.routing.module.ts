import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'signin',
                component: SigninComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}
