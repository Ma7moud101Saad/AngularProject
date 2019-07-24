import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductByIdComponent } from './update-product-by-id.component';

describe('UpdateProductByIdComponent', () => {
  let component: UpdateProductByIdComponent;
  let fixture: ComponentFixture<UpdateProductByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
