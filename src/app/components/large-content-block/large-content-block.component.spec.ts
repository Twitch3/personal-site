import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeContentBlockComponent } from './large-content-block.component';

describe('LargeContentBlockComponent', () => {
  let component: LargeContentBlockComponent;
  let fixture: ComponentFixture<LargeContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
