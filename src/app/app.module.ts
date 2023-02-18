import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavebareComponent } from './shared/navebare/navebare.component';
import { HomeComponent } from './components/home/home.component';
import { CafeMenuComponent } from './components/cafe-menu/cafe-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SearchPipe } from './core/pipes/search.pipe';
import{FormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component'
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavebareComponent,
    HomeComponent,
    CafeMenuComponent,
    CartComponent,
    NotFoundComponent,
    MenuItemComponent,
    SearchPipe,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
