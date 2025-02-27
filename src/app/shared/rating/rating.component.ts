import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()

  rates: number[] = [1,2,3,4,5]
  rate: number = 0
  previousRate: number


  constructor() { }

  ngOnInit() {
  }


  setRate(rate: number){
    this.rate = rate
    this.previousRate = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRate(temp: number){
    if(this.previousRate === undefined){
      this.previousRate = this.rate
    }
    this.rate = temp
  }

  clearTemporaryRate(){
    if(this.previousRate !== undefined){
      this.rate = this.previousRate
    }

    this.previousRate = undefined

  }

}
