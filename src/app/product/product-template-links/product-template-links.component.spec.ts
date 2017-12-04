import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplateLinksComponent } from './product-template-links.component';

describe('ProductTemplateLinksComponent', () => {
  let component: ProductTemplateLinksComponent;
  let fixture: ComponentFixture<ProductTemplateLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTemplateLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTemplateLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
