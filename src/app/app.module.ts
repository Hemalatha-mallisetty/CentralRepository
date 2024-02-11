import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AddComponent } from './add/add.component';
=======
import { EditComponent } from './edit/edit.component';
>>>>>>> edit-feature2
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AddComponent
=======
    EditComponent
>>>>>>> edit-feature2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
