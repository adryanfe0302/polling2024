import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollingComponent } from './polling/polling.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CreateComponent } from './candidate/create/create.component';
import { DesignateComponent } from './designate/designate.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthguardGuard } from './guard/authguard.guard'


const routes: Routes = [
  {
    component:LoginComponent,
    path: 'login'
  },
  {
    component:DashboardComponent,
    path: 'dashboard'
  },
  {
    component:PollingComponent,
    path: 'polling'
  },
  {
    component:CandidateComponent,
    path: 'candidate'
  },
  {
    component:CreateComponent,
    path: 'candidate/create'
  },
  {
    component:DesignateComponent,
    path: 'designate',
    canActivate: [AuthguardGuard],
    data: {
      role: 'admin'
    }
  },
  {
    path: 'not-found',
    component: NotfoundComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'not-found'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
