import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsTableComponent } from './rooms-table.component';

describe('RoomsTableComponent', () => {
  let component: RoomsTableComponent;
  let fixture: ComponentFixture<RoomsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
