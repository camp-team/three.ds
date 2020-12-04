import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageObjectComponent } from './image-object.component';

describe('ImageObjectComponent', () => {
  let component: ImageObjectComponent;
  let fixture: ComponentFixture<ImageObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
