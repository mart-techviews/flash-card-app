import { EventEmitter, Injectable } from '@angular/core';
import { question } from '../Models/flash-card';

@Injectable({
  providedIn: 'root'
})
export class FlashCardService {

  questions: question[] = [
    new question('What is Javascript', 'JavaScript is a programming language used to create dynamic and interactive content on websites. It runs in the browser and can also run on servers using Node.js.'),
    new question('What is the difference between let, const, and var?', 'var is function-scoped and can be redeclared, let is block-scoped and can be reassigned and const is block-scoped and cannot be reassigned after initialization.'),
    new question('What is a JavaScript function?', 'A function is a reusable block of code designed to perform a specific task. It can take inputs (parameters) and return a value.'),
    new question('What is an array in JavaScript?', 'An array is a data structure used to store multiple values in a single variable.'),
    new question('What is an object in JavaScript?', 'An object is a collection of key-value pairs used to store related data.'),
    new question('What is the difference between == and ===?', '== compares values after type conversion (loose equality) while === compares both value and type (strict equality).'),
    new question('What is undefined in JavaScript?', 'undefined means a variable has been declared but has not yet been assigned a value.'),
    new question('What is null in JavaScript?', 'null represents an intentional absence of a value. It is explicitly assigned.'),
    new question('What is a promise in JavaScript?', 'A promise is an object representing the eventual completion or failure of an asynchronous operation.')
  ]
  
  getAllQuestions(){
    return this.questions
  }

  currentIndex = 0;
  cards:question[] = [];
  showAnswer: boolean = false;
  progressValue: number = 0;

 

  onNextCardClicked(){
    this.currentIndex = this.currentIndex + 1;
    this.showAnswer = false;
    this.progressValue = this.currentIndex * 10;
    this.progressValue = Math.max(0,Math.min(this.progressValue, 100));
    
    }

  onPreviousCardClicked(){
    this.currentIndex = this.currentIndex - 1;
    this.showAnswer = false;
    this.progressValue = this.currentIndex * 10;
    this.progressValue = Math.max(0, Math.min(this.progressValue, 100));
   }

  }


//Put your data in the service, and them=n use them everywhere by creating the instant of the service class in the component you want to use it and make it public if it needs to be used in the view template or outside the class you're creating that instance.


  // onShowAnswers: EventEmitter<question> = new EventEmitter<question>();

  // onShowAnswerClicked(question: question){
  //   this.onShowAnswers.emit(question)

  // }

