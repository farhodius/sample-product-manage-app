import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  public products: any[] = [];
  public searchTerm: string = "";

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.loadProducts().subscribe((products: any[]) => {
      this.products = products;
    });
  }

  getProductCount() {
    return this.products.length;
  }

  deleteProduct(id: string): void {
    this.productService
      .deleteProduct(id)
      .subscribe((result: any) => {
        this.search();
      });
  }

  search() {
    this.productService
      .searchProducts(this.searchTerm)
      .subscribe((products: any[]) => {
        this.products = products;
      });
  }
}
