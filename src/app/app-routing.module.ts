import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateissuepageComponent } from './createissuepage/createissuepage.component';
import { CreatissueComponent } from './creatissue/creatissue.component';
import { EditpageComponent } from './editpage/editpage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create' },
  { path: 'create', component: CreatissueComponent },
  {path: 'createpage', component: CreateissuepageComponent },
  {path: 'editpage', component: EditpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
