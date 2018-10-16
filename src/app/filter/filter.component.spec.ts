import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { FilterService } from '../filter.service';
import { Filter } from '../filter';
import { FilterComponent } from './filter.component';
import { CardComponent } from '../card/card.component';

describe('Component: FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let filterService: FilterService;
  let filter: Filter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent, 
                      CardComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid onInit', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('form valid after Angular calls ngOnInit', async(() => {
    // initialize component.form
    component.ngOnInit();
    // pick up async tasks started inside ng2 lifecycle 
    fixture.whenStable().then(() => {
      expect(component.form.valid).toBeTruthy();
    });
  }));

  it('suits field validity', () => {
    let errors = {};
    let suits = component.form.controls['suits'];
    
    // Suits field is required
    errors = suits.errors || {};
    expect(errors['required']).toBeTruthy();

    suits.setValue([0]);
    errors = suits.errors || {};
    expect(suits.value).toEqual([0]);

    // Max 13 cards per suit
    component.form.controls.size.setValue(14);
    suits.setValue([0]);
    errors = component.form.errors || {};
    expect(errors['size']).toBeTruthy();
  });

  it('hand size field validity', () => {
    let errors = {};
    let size = component.form.controls['size'];

    // Size field is required
    errors = size.errors || {};
    expect(errors['required']).toBeTruthy();

    size.setValue(52);
    errors = size.errors || {};
    expect(errors['required']).toBeFalsy();

    // Max 52 cards per deck
    size.setValue(53);
    errors = component.form.errors || {};
    expect(errors['size']).toBeTruthy();
  });
});
