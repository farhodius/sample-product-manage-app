import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-save-product",
  templateUrl: "./save-product.component.html",
  styleUrls: ["./save-product.component.css"],
})
export class SaveProductComponent implements OnInit {
  protected productId: string = null;
  public product: any = {};

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get("id");
      if (this.productId) {
        this.loadProduct(this.productId);
      } else {
        this.genProduct();
      }
    },
    (error) => {
      console.error(error);
    });
  }

  loadProduct(id: string) {
    this.productService.loadProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  genProduct() {
    this.product = { name: "", description: "", price: "" };
  }

  saveProduct(product) {
    let saveHanler: Observable<any>;
    if(this.productId) {
      saveHanler = this.productService.updateProduct(product, this.productId);
    }
    else {
      saveHanler = this.productService.createProduct(product);
    }
    saveHanler.subscribe((product) => {
      this.router.navigate(['/product']);
    });
  }

  isEdit(){
    return !!this.productId;
  }
}
