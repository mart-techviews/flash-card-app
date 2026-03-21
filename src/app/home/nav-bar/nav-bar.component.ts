import { Component } from '@angular/core';
import { question } from 'src/app/Models/flash-card';
import { FlashCardService } from 'src/app/Services/flash-card.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public flashCardService: FlashCardService){
  
    }

  // showAnswer(question: question){
  //   this.flashCardService.onShowAnswerClicked(question)
  // } 
  showAnswerClicked(){
    this.flashCardService.showAnswer = true;
    
  }

  hideAnswerClicked(){
    this.flashCardService.showAnswer = false;
  }



  updateProgress(){
    this.flashCardService.onNextCardClicked()
  }

  revisitProgress(){
    this.flashCardService.onPreviousCardClicked()
  }
}
