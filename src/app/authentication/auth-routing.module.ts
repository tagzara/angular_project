import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth.required";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Login Page',
            loginRequired: false
        }
    },
    {
        path: 'auth/register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Register Page',
            loginRequired: false
        }
    },
    {
        path: 'auth/logout',
        component: LogoutComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Logout',
            loginRequired: true
        }
    },
    {
        path: 'auth/user',
        component: UserComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'User Page',
            loginRequired: true
        }
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);