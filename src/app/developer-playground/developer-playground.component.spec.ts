import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperPlaygroundComponent } from './developer-playground.component';

describe('DeveloperPlaygroundComponent', () => {
  let component: DeveloperPlaygroundComponent;
  let fixture: ComponentFixture<DeveloperPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
