import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicesEntreprisesPage } from './services-entreprises.page';

describe('ServicesEntreprisesPage', () => {
  let component: ServicesEntreprisesPage;
  let fixture: ComponentFixture<ServicesEntreprisesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesEntreprisesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesEntreprisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
