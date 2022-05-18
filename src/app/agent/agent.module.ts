import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import { AgentordersComponent } from './agentorders/agentorders.component';
 
@NgModule({
  declarations: [
    RegisterComponent,
    AgentordersComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    FormsModule
  ]
})
export class AgentModule { }
