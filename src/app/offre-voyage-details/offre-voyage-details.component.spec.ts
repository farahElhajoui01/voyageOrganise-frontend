import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreVoyageDetailsComponent } from './offre-voyage-details.component';

describe('OffreVoyageDetailsComponent', () => {
  let component: OffreVoyageDetailsComponent;
  let fixture: ComponentFixture<OffreVoyageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreVoyageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreVoyageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
