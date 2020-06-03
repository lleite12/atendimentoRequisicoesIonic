import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtendReqPage } from './atend-req.page';

describe('AtendReqPage', () => {
  let component: AtendReqPage;
  let fixture: ComponentFixture<AtendReqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendReqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtendReqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
