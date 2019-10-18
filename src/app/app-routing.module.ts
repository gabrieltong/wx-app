import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { UnivsComponent } from './univs/univs.component';
import { UnivDetailComponent } from './univ-detail/univ-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/core", pathMatch: "full" },
  { path: "core", component: MainComponent },
  { path: "univs", component: UnivsComponent },
  { path: "univ/:id", component: UnivDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
