import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineComponentComponent } from './offline-component.component';

describe('OfflineComponentComponent', () => {
  let component: OfflineComponentComponent;
  let fixture: ComponentFixture<OfflineComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
