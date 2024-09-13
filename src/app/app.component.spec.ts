import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SocialAuthServiceConfig, SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { DogsComponent } from './admin/components/dogs/dogs.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [AppComponent],
    providers: [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider('YOUR_CLIENT_ID')
            }
          ],
        } as SocialAuthServiceConfig,
      },
      SocialAuthService,
    ],
  }).compileComponents();
});

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DogsComponent
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'proyecto1_is4tech'`, () => {
    expect(app.title).toEqual('proyecto1_is4tech');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('head title')?.textContent).toContain('Document');
  });
});
