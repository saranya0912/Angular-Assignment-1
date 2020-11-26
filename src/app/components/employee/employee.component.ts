import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css', '../../app.component.css']
})
export class EmployeeComponent implements OnInit {
  formattedSSN = '';
  formattedAVW = '';

  err = {
    avw: "",
    ssn:'',
  };

  constructor() { }
  get validatessn(){
    return this.empDetails.get('socialsecurity')
  }

  get validateavw(){
    return this.empDetails.get('avgweeklywage')
  }

 empDetails = new FormGroup({
    socialsecurity: new FormControl('',[
      Validators.pattern("^[0-9]{9}")]),
    avgweeklywage: new FormControl('',[
      Validators.pattern("^[0-9]*.[0-9]*")])
  });  

  ngOnInit() {
  }

  updateSSN(event: any) {
    console.log(event.target.value, event.key);
    let rawSSN = event.target.value;
    console.log(parseInt(event.key));
    if (parseInt(event.key) !== NaN) {
      let length = rawSSN.length;
      if (length === 1) {
        rawSSN = 'xxx-x' + event.key;
        length = rawSSN.length;
        console.log("1");
      } else if(length === 7) {
        rawSSN = event.target.value + "-";
        console.log("2")
      }
      if (length > 7) {
        rawSSN.replace(/\d/g,"x");
      }
      this.formattedSSN = rawSSN;
    } else {
      this.err.ssn = "ssn ahould be numbers";
    }
  }

  updateAVW(event: any){
    let rawAVW = event.target.value;
    if (!isNaN(rawAVW)) {
      this.formattedAVW = parseInt(rawAVW).toFixed(2);
    } else {
      this.err.avw = "Average weekly wage must be numbers";
    }
  }
}
