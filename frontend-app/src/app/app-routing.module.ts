import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './keycloak/AuthGaurd';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { UserAdvanceComponent } from './user-advance/user-advance.component';

const routes: Routes =
  [

    {
      path: 'users',
      component: UsersComponent,
      data: { roles: ['app-user'] },
      canActivate: [AuthGuard]
    },
    {
      path: 'admin',
      component: AdminComponent,
      data: { roles: ['app-admin'] },
      canActivate: [AuthGuard]
    },
    {
      path: 'advance-user',
      component:UserAdvanceComponent,
      data: { roles: ['app-user', 'app-admin'] },
      canActivate: [AuthGuard]
    },
    {
      path: 'welcome',
      component: WelcomeComponent
    },
    { path: 'unautherized', component: UnauthorizedComponent},
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
