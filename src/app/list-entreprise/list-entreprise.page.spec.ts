import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListEntreprisePage } from './list-entreprise.page';

describe('ListEntreprisePage', () => {
  let component: ListEntreprisePage;
  let fixture: ComponentFixture<ListEntreprisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntreprisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListEntreprisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
