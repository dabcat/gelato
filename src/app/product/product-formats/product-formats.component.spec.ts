import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormatsComponent } from './product-formats.component';

describe('ProductFormatsComponent', () => {
  let component: ProductFormatsComponent;
  let fixture: ComponentFixture<ProductFormatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
