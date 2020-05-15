import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZondIconComponent } from './zond-icon.component';

describe('ZondIconComponent', () => {
  let component: ZondIconComponent;
  let fixture: ComponentFixture<ZondIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZondIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZondIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
