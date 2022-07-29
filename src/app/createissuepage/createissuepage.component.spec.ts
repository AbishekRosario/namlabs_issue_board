import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateissuepageComponent } from './createissuepage.component';

describe('CreateissuepageComponent', () => {
  let component: CreateissuepageComponent;
  let fixture: ComponentFixture<CreateissuepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateissuepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateissuepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
