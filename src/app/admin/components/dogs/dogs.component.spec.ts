import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DogsComponent } from './dogs.component';
import { DogsService } from '../../dogs.service';
import { SocialAuthService, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';

describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [DogsComponent],
      providers: [
        DogsService,
        SocialAuthService,
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider('your-client-id') 
              }
            ]
          } as SocialAuthServiceConfig
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
