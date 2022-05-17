import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { ListComponent } from './list/list.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"services",component:ServicesComponent},
  {path:"serviceList",component:ListComponent},
  {path:"description",component:DescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
