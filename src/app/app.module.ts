import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { filtertextpipe } from './pipe/filtertext.pipe';
 import { FilterPipe } from './pipe/filtertext.pipe';

import { TodoComponent } from './todo/todo.component';
import { FilterCapitalPipe } from './pipe/filter-capital.pipe';



@NgModule({
  declarations: [
    TodoComponent,
    // filtertextpipe
    FilterPipe,
    FilterCapitalPipe,

  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
