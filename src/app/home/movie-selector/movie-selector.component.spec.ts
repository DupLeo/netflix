import { ComponentFixture, TestBed } from '@angular/core/testing';

import { movieSelectorComponent } from './movie-selector.component';

describe('movieSelectorComponent', () => {
  let component: movieSelectorComponent;
  let fixture: ComponentFixture<movieSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [movieSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(movieSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
