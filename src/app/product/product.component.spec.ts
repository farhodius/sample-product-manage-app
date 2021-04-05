import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProductService } from '../services/product.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let service: ProductService;
  let route: ActivatedRoute;

  beforeEach(() => {
    service = new ProductService(null);
    route = new ActivatedRoute();
    component = new ProductComponent(service, route);
  });

  it('should populate product property', () => {
    spyOn(service, 'loadProduct').and.callFake(() => {
      return of({_id: 1, name:'a', description: 'b', price: 1.1});
    });
    component.loadProduct('1');
    expect(component.product._id).toBe(1);
    expect(component.product.name).toBe('a');
    expect(component.product.description).toBe('b');
    expect(component.product.price).toBe(1.1);
  });
});
