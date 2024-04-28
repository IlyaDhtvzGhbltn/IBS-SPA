import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../services/auth.service';
import { LoginFormComponent } from './login-form.component';
import { AlertComponent } from '../../components/alert/alert.component';


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<any>;

  // Cerating a mock auth service
  const authServiceMoq = jasmine.createSpyObj('AuthService', ['login', 'canActivate', 'setAuthorization']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      declarations: [LoginFormComponent, AlertComponent],
      providers: [

        // Using mock instead real AuthService
        { provide: AuthService, useValue: authServiceMoq },

        TranslateService,
        Router]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(async () => {
    localStorage.clear();
  });

  // Checking that component created
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Checking that after success login localStorage containes token
  it('should save token after success login', () => {

    authServiceMoq.login.and.callFake((username: string, password: string) => {
      localStorage.setItem('access_token', 'fake_access_token');
      return of({ success: true });
    });

    component.onSubmit('correctUsername', 'correctPassword');

    var accessToken = localStorage.getItem('access_token')
    expect(accessToken).not.toBeNull();
  })


  // Checking that if credentials are invalid, localStorage doesn't contain token
  it('should not token if credentials are invalid', () => {

    authServiceMoq.login.and.callFake((username: string, password: string) => {
      return of({ success: false });
    });

    component.onSubmit('invalidUsername', 'orInvalidPassword');

    var accessToken = localStorage.getItem('access_token')
    expect(accessToken).toBeNull();
  })

});
