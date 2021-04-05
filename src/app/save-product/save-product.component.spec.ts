import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductService } from "../services/product.service";

import { SaveProductComponent } from "./save-product.component";
import { FormsModule } from '@angular/forms';

describe("SaveProductComponent", () => {
  let component: SaveProductComponent;
  let fixture: ComponentFixture<SaveProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaveProductComponent],
      providers: [ProductService],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
