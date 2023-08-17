import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageDetailsComponent } from './image-details/image-details.component'; // Import the new component
import { BlankPageComponent } from './blank-page/blank-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'image/:id', component: ImageDetailsComponent }, // Add this route
  { path: 'blank', component: BlankPageComponent } // Add a new route for the blank page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
