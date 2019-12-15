import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServerListComponent } from './test-server-list.component';

describe('TestServerListComponent', () => {
  let component: TestServerListComponent;
  let fixture: ComponentFixture<TestServerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestServerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
