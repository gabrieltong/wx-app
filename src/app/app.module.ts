import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { GraphQLModule } from "./graphql.module";
import { MainComponent } from "./main/main.component";
import { UnivsComponent } from "./univs/univs.component";
import { UnivDetailComponent } from "./univ-detail/univ-detail.component";
import { RecommendListComponent } from "./recommend-list/recommend-list.component";
import { RecommendUnivComponent } from "./recommend-univ/recommend-univ.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { CatalogItemComponent } from "./catalog-item/catalog-item.component";
import { SearchComponent } from "./search/search.component";
import { SearchItemComponent } from "./search-item/search-item.component";
import { AdvSearchComponent } from "./adv-search/adv-search.component";
import { AdvSearchItemComponent } from "./adv-search-item/adv-search-item.component";
import { SingleOptionComponent } from "./single-option/single-option.component";
import { MultiOptionComponent } from "./multi-option/multi-option.component";
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { DepartmentComponent } from './department/department.component';
import { FacultyComponent } from './faculty/faculty.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UnivsComponent,
    UnivDetailComponent,
    RecommendListComponent,
    RecommendUnivComponent,
    CatalogComponent,
    CatalogItemComponent,
    SearchComponent,
    SearchItemComponent,
    AdvSearchComponent,
    AdvSearchItemComponent,
    SingleOptionComponent,
    MultiOptionComponent,
    DepartmentComponent,
    FacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GraphQLModule,
    NgZorroAntdMobileModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
