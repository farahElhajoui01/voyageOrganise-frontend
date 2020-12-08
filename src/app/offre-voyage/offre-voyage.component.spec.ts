import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreVoyageComponent } from './offre-voyage.component';

describe('OffreVoyageComponent', () => {
  let component: OffreVoyageComponent;
  let fixture: ComponentFixture<OffreVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
