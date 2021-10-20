import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { RoleComponent } from "./admin/role/role.component";
import { UserComponent } from "./admin/user/user.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthGuard } from "./guards/auth.guard";
import { PreviewGuard } from "./guards/preview.guard";
import { HomeComponent } from "./home/home.component";
import { InterruptionListComponent } from "./interruption/interruption-list/interruption-list.component";
import { LoginComponent } from "./login/login.component";
import { NotesComponent } from "./notes/notes.component";
import { SubstationNewComponent } from "./substation-new/substation-new.component";
import { SubstationDetailComponent } from "./substation/substation-detail/substation-detail.component";
import { SubstationListComponent } from "./substation/substation-list/substation-list.component";
import { SubstationUpdateComponent } from "./substation/substation-update/substation-update.component";
import { SubstationComponent } from "./substation/substation.component";
// import { SubstationResolver } from "./substation/substation.resolver";

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent,
      data: {isPreviewAvailable: true, role: 'ROLE_ADMIN',
            redirectPreviewNotAvailableTo: 'home'
            }, // staticki podaci
      canActivate: [PreviewGuard]
    },
    { path: 'notes', component: NotesComponent},
    { path: 'role', component: RoleComponent},
    { path: 'admin', component: AdminComponent,
      canActivate: [ AuthGuard ],
      children:[
                { path: 'user', component: UserComponent},
                { path: 'role', component: RoleComponent},
               
              ]
    },
    { path: 'substation', component: SubstationListComponent,
   //   children: [{ path: 'substation', component: SubstationComponent,
                  // resolve: {substation: SubstationResolver}},
  },
    {path: 'substation-new', component: SubstationNewComponent},
    {path: 'interruption-list', component: InterruptionListComponent},
   
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: 'home' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}