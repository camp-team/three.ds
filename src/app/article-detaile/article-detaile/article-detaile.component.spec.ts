import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetaileComponent } from './article-detaile.component';

describe('ArticleDetaileComponent', () => {
  let component: ArticleDetaileComponent;
  let fixture: ComponentFixture<ArticleDetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetaileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
