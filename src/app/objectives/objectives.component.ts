import { Component, Input } from '@angular/core';
import { Objective } from '../model';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
})
export class ObjectivesComponent {
  @Input() objectives: Objective[] = [];
}
