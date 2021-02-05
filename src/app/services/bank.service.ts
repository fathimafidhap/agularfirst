import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {



  accountDetails: any = {
    userone: { acno: 1000, bal: 10000, username: "userone", password: "testuser",  history:[] },
    usertwo: { acno: 1000, bal: 10000, username: "usertwo", password: "testuser3",history:[] },
    userthree: { acno: 1001, bal: 12000, username: "userthree", password: "testuser1" ,history:[]},
    userfour: { acno: 1002, bal: 13000, username: "userfour", password: "testuser2",history:[] }
  };

  authenticateUser = (uname: string, pwd: string) => {
    let dataset = this.accountDetails;
    if (uname in dataset) {
      if (dataset[uname].password === pwd) {
        return 1;//valid user and password
      }
      else {
        return 0;//incorrect password
      }
    }
    else {
      return -1;//no user exsist
      // alert("no username found matching!!!")
    }
  }
  deposit = (uname: string, pwd: string, amt: number) => {
    let user = this.authenticateUser(uname, pwd)
    let dataset = this.accountDetails;
    if (user == 1) {
      dataset[uname].bal += amt;
      dataset[uname].history.push({
        amount: amt, typeOfTransaction: 'credit' 
      });
      alert("amount is credited by" + amt + "current balance is" + dataset[uname].bal)
    }
    else if (user == 0) {
      alert("incorrect password");
    }
    else if (user == -1) {
      alert("no user exsist with provided details");
    }
  
  }
  withdrawal = (uname: string, pwd: string, amt:number) => {
    let user = this.authenticateUser(uname, pwd)
    let dataset = this.accountDetails;
    if (user == 1) {
      if (dataset[uname].bal < amt) {
       
       
        alert("insufficent balance");
      }

      else {
        dataset[uname].bal -= amt;
        dataset[uname].history.push({
          amount: amt, typeOfTransaction: 'debit' 
       });
        alert("amount is debit by" + amt + "current balance is" + dataset[uname].bal);
      }
    }

    else if (user == 0) {
      alert("incorrect password")
    }

    else if (user == -1) {
      alert("no user exsist with provided details")
    }
  }
  getHistory(){
    let dataset = this.accountDetails;
    return dataset["userone"].history;
  }
}
