import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddClasicComponent } from './product-add-clasic.component';

describe('ProductAddClasicComponent', () => {
  let component: ProductAddClasicComponent;
  let fixture: ComponentFixture<ProductAddClasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddClasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddClasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
