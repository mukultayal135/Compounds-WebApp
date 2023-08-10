import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompoundComponent } from './new-compound';

describe('ModalComponent', () => {
  let component: NewCompoundComponent;
  let fixture: ComponentFixture<NewCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCompoundComponent],
    });
    fixture = TestBed.createComponent(NewCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
