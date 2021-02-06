import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  {
    path:'users',component: UsersComponent
  },
  {
    path:'parent',component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
