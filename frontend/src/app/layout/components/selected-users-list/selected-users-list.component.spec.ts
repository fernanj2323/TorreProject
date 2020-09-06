import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedUsersListComponent } from './selected-users-list.component';

describe('SelectedUsersListComponent', () => {
  let component: SelectedUsersListComponent;
  let fixture: ComponentFixture<SelectedUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
