import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardAngularComponent } from './user-card-angular.component';

describe('UserCardAngularComponent', () => {
  let component: UserCardAngularComponent;
  let fixture: ComponentFixture<UserCardAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
