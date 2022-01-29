import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { filtertextpipe } from './pipe/filtertext.pipe';

import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [
    TodoComponent,
    filtertextpipe,

  ],
  imports: [
    BrowserModule,Ng2SearchPipeModule,FormsModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
