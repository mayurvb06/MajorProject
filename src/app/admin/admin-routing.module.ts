import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AgentsComponent } from './agents/agents.component';

const routes: Routes = [
  {path:"adminpage",component:AdminpageComponent},
  {path:"agents",component:AgentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
