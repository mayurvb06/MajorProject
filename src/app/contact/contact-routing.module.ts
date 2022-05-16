import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';

const routes: Routes = [
  {path:"contactus",component:ContactpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
