import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatissueComponent } from './creatissue.component';

describe('CreatissueComponent', () => {
  let component: CreatissueComponent;
  let fixture: ComponentFixture<CreatissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
