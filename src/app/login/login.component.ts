import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	validateUser(){
		
	}

	isPasswordMatching(){
		if(this.signPassword.value != '' && this.signPasswordConfirm.value != ''){
			if(this.signPassword.value!=this.signPasswordConfirm.value){
				this.signAlerts = "Passwords Don't Match";
				this.signAlertsVisibility = 'block';
			}
			else{
				this.signAlerts = "";
				this.signAlertsVisibility = 'none';
			}
		}
	}

    constructor() { }

    ngOnInit() {
    }

    loginName = new FormControl('');
    loginPassword = new FormControl('');
    signName = new FormControl('');
    signPassword = new FormControl('');
    signPasswordConfirm = new FormControl('');
    loginAlerts:string = "";
    signAlerts:string = "";
    signAlertsVisibility:string = "none";
    loginAlertsVisibility:string = "none";
}
