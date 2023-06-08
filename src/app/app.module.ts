import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DesignateComponent } from './designate/designate.component';
import { CandidateComponent } from './candidate/candidate.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';

//chart dashboard
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartsComponent } from './charts/charts.component';
import { CreateComponent } from './candidate/create/create.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StoreModule } from '@ngrx/store';
import { LoadingComponent } from './layout/loading/loading.component';
import { ModalComponent } from './designate/modal/modal.component';

//interceptors
import { ApiInterceptors } from './service/interceptors/api.interceptor';
import { PollingComponent } from './polling/polling.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    DesignateComponent,
    CandidateComponent,
    ChartsComponent,
    CreateComponent,
    NotfoundComponent,
    LoadingComponent,
    ModalComponent,
    PollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    NgbModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    CanvasJSAngularChartsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptors,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
