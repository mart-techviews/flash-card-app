import { Component, Input } from '@angular/core';
import { FlashCardService } from '../Services/flash-card.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {

  constructor (public flashCardService: FlashCardService){

  }

  progressValue = this.flashCardService.progressValue


}
