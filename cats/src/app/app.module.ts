import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { CatViewComponent } from './components/cat-view/cat-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatDetailsComponent,
    CatViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
