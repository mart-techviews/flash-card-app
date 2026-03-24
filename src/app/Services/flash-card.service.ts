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
    new question('What is a callback function?', 'A callback is a function passed as an argument to another function and executed later.'),
    new question('What is null in JavaScript?', 'null represents an intentional absence of a value. It is explicitly assigned.'),
    new question('What is a promise in JavaScript?', 'A promise is an object representing the eventual completion or failure of an asynchronous operation.'),
    new question('What is a closure in JavaScript?', 'A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing.'),
    new question('What is the DOM?', 'The DOM (Document Object Model) is a programming interface that represents the structure of an HTML document as a tree of objects.'),
    new question('What is event bubbling?', 'Event bubbling is when an event starts from the target element and propagates upward through its parent elements.'),
    new question('What is the difference between map() and forEach()?', '1. map() returns a new array with transformed elements. 2. forEach() executes a function for each element but does not return a new array.'),
    new question('What is this in JavaScript?', 'this refers to the object that is currently executing the function, and its value depends on how the function is called.'),
    new question('What is an arrow function?', 'An arrow function is a shorter syntax for writing functions and does not have its own this context.'),
    new question('What is NaN in JavaScript?', 'NaN stands for "Not-a-Number" and represents a value that is not a valid number.'),
    new question('What is the difference between synchronous and asynchronous code?', '1. Synchronous code runs line by line, waiting for each task to finish. 2. Asynchronous code allows tasks to run in the background without blocking execution.'),
    new question('What is async/await?', 'async/await is a syntax used to handle asynchronous operations in a more readable way, making code look synchronous.'),
    new question('What is local Storage in JavaScript?', 'localStorage is a web storage API that allows you to store data in the browser that persists even after the page is refreshed.')
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
    this.currentIndex= Math.max(0,Math.min(this.currentIndex, 19));
    this.showAnswer = false;
    this.progressValue = Math.round((this.currentIndex/(this.cards.length - 1))*100*10)/10;
    this.progressValue = Math.max(0,Math.min(this.progressValue, 100));
    
    }

  onPreviousCardClicked(){
    this.currentIndex = this.currentIndex - 1;
    this.currentIndex= Math.max(0,Math.min(this.currentIndex, 19));
    this.showAnswer = false;
    this.progressValue = Math.round((this.currentIndex/(this.cards.length - 1))*100*10)/10;
    this.progressValue = Math.max(0, Math.min(this.progressValue, 100));
   }

  }


//Put your data in the service, and then use them everywhere by creating the instant of the service class in the component you want to use it and make it public if it needs to be used in the view template or outside the class you're creating that instance.


  // onShowAnswers: EventEmitter<question> = new EventEmitter<question>();

  // onShowAnswerClicked(question: question){
  //   this.onShowAnswers.emit(question)

  // }

