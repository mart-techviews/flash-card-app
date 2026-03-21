import { Component, OnInit } from '@angular/core';
import { question } from 'src/app/Models/flash-card';
import { FlashCardService } from 'src/app/Services/flash-card.service';
// import { questions } from 'src/app/Models/flash-card';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  

  constructor(public flashCardService: FlashCardService){

  }
  
  
  
  ngOnInit(){
    this.flashCardService.cards = this.flashCardService.getAllQuestions();
  
  } 
  

}
