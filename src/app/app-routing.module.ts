import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ServicesComponent } from "./shared/components/services/services.component";
import { AboutComponent } from "./shared/components/about/about.component";
import { ProcessComponent } from "./shared/components/process/process.component";
import { BlogItemComponent } from "./pages/blog-item/blog-item.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: "full" },
  { path: 'services', component: ServicesComponent, pathMatch: "full" },
  { path: 'about', component: AboutComponent, pathMatch: "full" },
  { path: 'projects', component: ProcessComponent, pathMatch: "full" },
  { path: 'blog', component: BlogComponent, pathMatch: "full" },
  { path: 'blog/:id', component: BlogItemComponent, pathMatch: "full" },
  { path: '', redirectTo: 'home', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
