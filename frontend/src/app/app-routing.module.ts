import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundDetailComponent } from '../app/components/compound-detail/compound-detail.component';
import { HomeComponent } from '../app/pages/home/home.component';

const routes: Routes = [
  {
    path: 'compounds',
    component: HomeComponent,
  },
  {
    path: 'compound/:id',
    component: CompoundDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
