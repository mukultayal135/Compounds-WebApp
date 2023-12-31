import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CompoundComponent } from './components/compound/compound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompoundDetailComponent } from './components/compound-detail/compound-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NewCompoundComponent } from './components/new-compound/new-compound';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CompoundComponent,
    CompoundDetailComponent,
    PaginationComponent,
    NewCompoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
