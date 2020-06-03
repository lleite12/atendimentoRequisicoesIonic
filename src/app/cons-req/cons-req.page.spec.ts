import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsReqPage } from './cons-req.page';

describe('ConsReqPage', () => {
  let component: ConsReqPage;
  let fixture: ComponentFixture<ConsReqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsReqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsReqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
