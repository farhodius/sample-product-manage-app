import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService(null);
    component = new LoginComponent(service);
  });

  it('should set the value of invalidLogin to false if authorized successfully', () => {
    spyOn(service, 'authenticate').and.callFake(() => {
      return of('Success');
    });

    component.submitLogin({});
    expect(component.isInvalidLogin()).toBe(false);
  });

  it('should set the value of invalidLogin to true if failed to authorize', () => {
    spyOn(service, 'authenticate').and.callFake(() => {
      return of('Error');
    });

    component.submitLogin({});
    expect(component.isInvalidLogin()).toBe(true);
  });
});
