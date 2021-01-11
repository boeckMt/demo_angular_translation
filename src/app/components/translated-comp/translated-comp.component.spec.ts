import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TranslatedCompComponent } from './translated-comp.component';

describe('TranslatedCompComponent', () => {
  let component: TranslatedCompComponent;
  let fixture: ComponentFixture<TranslatedCompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatedCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
