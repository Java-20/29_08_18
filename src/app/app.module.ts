import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddComponent } from './add/add.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ContactsModule} from './contacts.module';


const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'contacts', component:ContactsComponent},
  {path:'contacts', loadChildren:'./contacts.module#ContactsModule'},
  {path:'add',component:AddComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ContactsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy:PreloadAllModules
    })
    // ContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
