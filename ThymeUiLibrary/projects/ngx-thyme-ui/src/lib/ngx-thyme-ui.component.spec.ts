import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxThymeUiComponent } from './ngx-thyme-ui.component';

describe('NgxThymeUiComponent', () => {
  let component: NgxThymeUiComponent;
  let fixture: ComponentFixture<NgxThymeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxThymeUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxThymeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
