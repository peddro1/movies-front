import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseMoviesComponent } from './release-movies.component';

describe('ReleaseMoviesComponent', () => {
  let component: ReleaseMoviesComponent;
  let fixture: ComponentFixture<ReleaseMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
