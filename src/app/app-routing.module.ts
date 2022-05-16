import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",loadChildren:()=>import("./homepage/homepage.module").then(mod=>mod.HomepageModule)},
  {path:"",redirectTo:"/home/Homepage",pathMatch:'full'},
  {path:"about",loadChildren:()=>import("./about/about.module").then(mod=>mod.AboutModule)},
  {path:"contact",loadChildren:()=>import("./contact/contact.module").then(mod=>mod.ContactModule)},
  {path:"auth",loadChildren:()=>import("./auth/auth.module").then(mod=>mod.AuthModule)},
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(mod=>mod.AdminModule)},
  {path:"agent",loadChildren:()=>import("./agent/agent.module").then(mod=>mod.AgentModule)},
  {path:"Services",loadChildren:()=>import("./services/services.module").then(mod=>mod.ServicesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
