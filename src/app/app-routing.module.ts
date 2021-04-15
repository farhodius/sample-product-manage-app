import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FileListComponent } from "./file-list/file-list.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { SaveProductComponent } from "./save-product/save-product.component";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: "product",
    canActivate: [AuthGuardService],
    children: [
      { path: "new", component: SaveProductComponent },
      { path: "edit/:id", component: SaveProductComponent },
      { path: ":id", component: ProductComponent },
      { path: "", component: ProductListComponent },
    ],
  },
  {
    path: "file",
    canActivate: [AuthGuardService],
    children: [
      { path: "list", component: FileListComponent },
      { path: "upload", component: FileUploadComponent },
    ],
  },
  // { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
