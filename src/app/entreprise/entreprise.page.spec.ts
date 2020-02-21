import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntreprisePage } from './entreprise.page';

describe('EntreprisePage', () => {
  let component: EntreprisePage;
  let fixture: ComponentFixture<EntreprisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreprisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntreprisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
