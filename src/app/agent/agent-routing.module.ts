import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentordersComponent } from './agentorders/agentorders.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"enquiries",component:AgentordersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
