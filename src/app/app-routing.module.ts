import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentinfoComponent } from './storedata/studentinfo/studentinfo.component';
import { UpdateinfoComponent } from './storedata/updateinfo/updateinfo.component';
import { DashboardComponent } from './storedata/dashboard/dashboard.component';
import { FormdemoComponent } from './storedata/formdemo/formdemo.component';
import { PdfmakerComponent } from './storedata/pdfmaker/pdfmaker.component';
import { MattabledemoComponent } from './storedata/mattabledemo/mattabledemo.component';
import { ImageblobComponent } from './storedata/imageblob/imageblob.component';

const routes: Routes = [

{
  // path: '',
  // component: AppComponent,
  // children : [
  //   {
      path : '',
      component : StudentinfoComponent
    },
    {
      path: 'dashboard',
      component : DashboardComponent
    },
    {
      path: 'formdemo',
      component: FormdemoComponent
    },
    {
      path: 'pdfmake',
      component: PdfmakerComponent
    },
    {
      path: 'mattable',
      component: MattabledemoComponent
    },
    {
      path: 'blob',
      component: ImageblobComponent
    }
//   ]
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
