import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormationComponent} from './formation/formation.component';
import  {AproposComponent} from './apropos/apropos.component';


const routes: Routes = [ {
    path: 'formation', component: FormationComponent
  }, {
    path: '',
    component: HomeComponent
  } , {
  path: 'apropos', component: AproposComponent
}, {
  path: '',
  component: HomeComponent
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
