import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldableHeroComponent } from './foldable-hero.component';

describe('FoldableHeroComponent', () => {
  let component: FoldableHeroComponent;
  let fixture: ComponentFixture<FoldableHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldableHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldableHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
