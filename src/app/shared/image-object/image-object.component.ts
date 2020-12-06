import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SceneService } from 'src/app/services/scene.service';

@Component({
  selector: 'app-image-object',
  templateUrl: './image-object.component.html',
  styleUrls: ['./image-object.component.scss'],
  providers: [SceneService]
})
export class ImageObjectComponent implements OnInit {
  @Input() imageURL: string;

  constructor(private scene: SceneService) { }

  ngOnInit(): void {}

  @ViewChild('container')
  set container(container: ElementRef) {
    this.scene.initialize(container.nativeElement, this.imageURL);
  }
}
