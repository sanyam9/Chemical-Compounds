import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { CompoundFormComponent } from './pages/compound-form/compound-form.component';

const appRoutes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'compound/add', component: CompoundFormComponent },
  { path: 'compound/:id', component: CardDetailsComponent },
  { path: 'compound/edit/:id', component: CompoundFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    CardItemComponent,
    CardDetailsComponent,
    CompoundFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
