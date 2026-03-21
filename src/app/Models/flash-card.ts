export class question {
    // getAllQuestions(): never[] {
    //   throw new Error('Method not implemented.');
    // }
    question: string;
    answer: string

    constructor(question: string, answer: string){
        this.question = question
        this.answer = answer
    }
}