import { Component, Input } from '@angular/core';
import { Perspective } from '../model';

@Component({
  selector: 'app-perspectives',
  templateUrl: './perspectives.component.html',
})

export class PerspectivesComponent {
  @Input() perspectives: Perspective[] = [];
}


