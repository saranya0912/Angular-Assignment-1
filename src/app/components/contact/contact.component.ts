import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../app.component.css']
})
export class ContactComponent implements OnInit {
 isSameShippingAddress = true;
 formattedPhoneNumber = '';
 details = {
   email: '',
 }
 err = {
  phone: "Phone number must be 10 digits",
  email: "Please provide a valid email address",
  verifyEmail: "Please provide a valid email address",
  shipEmail:"Please provide a valid shipping email address",  
  verifyShipEmail: "Please provide a valid shipping email address",
  zipcode: "Zipcode should be 5 digits",
 }
 

 get validateEmail(){
	return this.userDetails.get('email')
  }

  get validateVerifyEmail(){
	return this.userDetails.get('verifyEmail')
  }

  get validateShipEmail(){
  return this.userDetails.get('shipEmail')
  }
  
  get validateVerifyShipEmail(){
  return this.userDetails.get('verifyShipEmail')
  }

  get validateZipcode(){
    return this.userDetails.get('zipcode')
  }

  get validatePhone(){
    return this.userDetails.get('phone')
  }

 userDetails = new FormGroup({
    email: new FormControl('',[
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    verifyEmail: new FormControl('',[
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    shipEmail: new FormControl('',[
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    verifyShipEmail: new FormControl('',[
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    zipcode: new FormControl('',[
      Validators.pattern("^[0-9]{5}")]),
    phone: new FormControl('',[
        Validators.pattern("^[0-9]{10}")])
  });  
  
  ngOnInit() { 
    this.isSameShippingAddress = true;
  }
  toggle() {
    this.isSameShippingAddress = !this.isSameShippingAddress;
  }
  handleZipcodeChange(event: any){
    if(isNaN(event.target.value)){
      this.err.zipcode = "Alphabets not allowed in Zipcode";
    }
  }
  formatPhoneNumber(event: any){
    let rawPhoneNumebr = event.target.value;
    if (rawPhoneNumebr === '') {
      this.formattedPhoneNumber = '';
    }
    else if (!isNaN(rawPhoneNumebr)){
      this.formattedPhoneNumber = "(" + rawPhoneNumebr.slice(0, 3) + ")-" + rawPhoneNumebr.slice(3,6) + "-" + rawPhoneNumebr.slice(6);
    } else {
      this.err.phone = "Alphabets not allowed in Phone number";
    }
  }
  updateEmailValue(event: any){
    console.log(event.target.value);
    this.details.email = event.target.value;
  }
  handleVerifyEmail(event: any){
    console.log(event.target.value, this.details.email);
    if (this.details.email !== event.target.value){
      console.log("hjj");
      this.err.verifyEmail = "Verify email should be same as Email"
    }
  }
}
