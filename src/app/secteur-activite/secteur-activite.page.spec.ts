import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecteurActivitePage } from './secteur-activite.page';

describe('SecteurActivitePage', () => {
  let component: SecteurActivitePage;
  let fixture: ComponentFixture<SecteurActivitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecteurActivitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecteurActivitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
