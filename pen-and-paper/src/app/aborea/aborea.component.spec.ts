import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboreaComponent } from './aborea.component';

describe('AboreaComponent', () => {
  let component: AboreaComponent;
  let fixture: ComponentFixture<AboreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
