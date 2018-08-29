import {NgModule} from '@angular/core';
import {ContactsComponent} from './contacts/contacts.component';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ItemInfoComponent} from './item-info/item-info.component';

const contactsRoutes: Routes = [
  {path:'', component:ContactsComponent, children:[
      {path:':id',component:ItemInfoComponent}
    ]}
];
@NgModule({
  declarations:[
    ContactsComponent,
    ItemInfoComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(contactsRoutes)
  ]
})
export class ContactsModule {

}

