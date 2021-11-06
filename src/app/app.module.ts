import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { RoleComponent } from './admin/role/role.component';
import { RoleService } from './admin/role/role.service';
import { UserComponent } from './admin/user/user.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorInterceptor } from './auth/interceptors/error.interceptor';
import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InterruptionListComponent } from './interruption/interruption-list/interruption-list.component';
import { InterruptionService } from './interruption/interruption.service';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PreviewService } from './shared/preview.service';
import { SubstationNewComponent } from './substation-new/substation-new.component';
import { SubstationDetailComponent } from './substation/substation-detail/substation-detail.component';
import { SubstationListComponent } from './substation/substation-list/substation-list.component';
import { SubstationUpdateComponent } from './substation/substation-update/substation-update.component';
import { SubstationService } from './substation/substation.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    SubstationListComponent,
    SubstationNewComponent,
    SubstationDetailComponent,
    SubstationUpdateComponent,
    LoginComponent,
    InterruptionListComponent,
    HomeComponent,
    LoginComponent,
    RoleComponent,
    NotesComponent,
    UserComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SubstationService,
    InterruptionService,
    RoleService,
    PreviewService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
