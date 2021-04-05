import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  private productId: string = null;
  public product: any = {};

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.productId = params.get("id");
        if (this.productId) {
          this.loadProduct(this.productId);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadProduct(id: string) {
    this.productService.loadProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

}
