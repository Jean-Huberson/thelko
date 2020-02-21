import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatisticsServicePage } from './statistics-service.page';

describe('StatisticsServicePage', () => {
  let component: StatisticsServicePage;
  let fixture: ComponentFixture<StatisticsServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
