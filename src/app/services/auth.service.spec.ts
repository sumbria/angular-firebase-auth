import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [
        AngularFireModule.initializeApp(environment.firebase, 'home'),
        AngularFirestoreModule,
        AngularFireAuthModule,
      ],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
