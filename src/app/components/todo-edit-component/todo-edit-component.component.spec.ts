import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditComponentComponent } from './todo-edit-component.component';

describe('TodoEditComponentComponent', () => {
  let component: TodoEditComponentComponent;
  let fixture: ComponentFixture<TodoEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoEditComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
