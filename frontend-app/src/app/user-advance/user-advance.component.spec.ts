import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdvanceComponent } from './user-advance.component';

describe('UserAdvanceComponent', () => {
  let component: UserAdvanceComponent;
  let fixture: ComponentFixture<UserAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAdvanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
