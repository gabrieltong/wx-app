import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { UnivsComponent } from "./univs/univs.component";
import { UnivDetailComponent } from "./univ-detail/univ-detail.component";
import { RecommendListComponent } from "./recommend-list/recommend-list.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { SearchComponent } from "./search/search.component";
import { AdvSearchComponent } from "./adv-search/adv-search.component";

const routes: Routes = [
  { path: "", redirectTo: "/core", pathMatch: "full" },
  { path: "core", component: MainComponent },
  { path: "univs", component: UnivsComponent },
  { path: "univ/:id", component: UnivDetailComponent },
  { path: "recommend/:id", component: RecommendListComponent },
  { path: "catalog", component: CatalogComponent },
  { path: "search", component: SearchComponent },
  { path: "adv_search/:category", component: AdvSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
