import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { DescriptionComponent } from './description/description.component';
import { ListComponent } from './list/list.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"services",component:ServicesComponent},
  {path:"serviceList",component:ListComponent},
  {path:"description",component:DescriptionComponent},
  {path:"bookings",component:BookingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
