import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SceneService } from 'src/app/services/scene.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  providers: [SceneService]
})
export class ArticleDetailComponent implements OnInit {

  constructor(
    private scene: SceneService
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('container')
  set container(container: ElementRef) {
    this.scene.initialize(container.nativeElement);
  }

}
