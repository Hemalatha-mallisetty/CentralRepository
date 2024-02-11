import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'edit',component:EditComponent}
];
>>>>>>> edit-feature2

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { 
}
=======
export class AppRoutingModule { }
>>>>>>> edit-feature2
