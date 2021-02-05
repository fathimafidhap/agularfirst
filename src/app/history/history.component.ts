import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history:{amount:Number,typeOfTransaction:string}[]= [
    
  ]



 constructor(private bankService:BankService) { //
  this.history=bankService.getHistory() ;
 }

 ngOnInit(): void {
  }

}
