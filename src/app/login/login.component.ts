import { environment } from './../../environments/environment';
import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router, RouterEvent } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  @ViewChild('dataContainer', { static: false })
  dataContainer!: ElementRef;
  public showCaptchaError: boolean = false;
  public pass: any;
  public showPassword: boolean = false;
  public svg: any = [];  
  public errorText: string = "";
  public showInvalid: boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,   
    private http: HttpClient) 
    {
      this.loginForm = this.fb.group({
        employeeid: ['', Validators.required],
        password: ['', Validators.required],
        captcha: ['', Validators.required],
        captchaText: [''],
      });
  }

  /////////////////////////////////////////////////////////////
  
  ngOnInit(): void 
  {
    this.svgcaptcha();
  }

  ////////////////////////////////////////////////

  onPassChangeEvent(event: any)
  {
    var str = event.target.value.concat('CRSC%&456');
    console.log("check ",str);
    console.log("check 1",event.target.value,str);
    this.pass = CryptoJS.SHA512(str).toString(CryptoJS.enc.Base64);
    console.log("check 1",this.pass);
    this.loginForm.patchValue
    ({
        password: this.pass
    });
    this.loginForm.value.password = this.pass;
  }

  /////////////////////////////////////////////////

  login()
  {
    //alert("helooo");this.loginForm.valid && 
    if (this.loginForm.get('captcha').value == this.loginForm.get('captchaText').value) 
    {
      this.authService.login(this.loginForm.value).subscribe(res => 
      {
        if (res['success'] == 1) 
        {
            // if (res['status'] == 0) {
            //   this.router.navigate(['profile']);
            // } else if (res['status'] == 1) {
          if (res['status'] == 1) 
          {
            switch (res['role']) 
            {
                  case 1:
                  {
                    this.router.navigate(['/dgadmin/dashboard']);
                    break;
                  }
                  case 2: 
                  {
                  this.router.navigate(['/projectdirector/dashboard']);
                  break;
                  }
                  case 3:
                  {
                    this.router.navigate(['/hrmsadmin/dashboard']);
                    break;
                  }
                  case 4:
                  {
                    this.router.navigate(['/employee/dashboard']);
                    break;
                  }
                  default:
                  {
                    Swal.fire({
                      icon: 'error',
                      text: 'Please Check Login Details',
                      timer: 5000
                    });
                    break;
                  }
              }
          }
        }
        else 
        {
            Swal.fire({
              icon: 'error',
              text: 'कृपया लॉगिन विवरण जांचें',
              timer: 5000
            });
        }
      });
   }
    else {
      this.showCaptchaError = true;
      setTimeout(() => {
        this.showCaptchaError = false;
      }, 3000);
    }
  }

  ///////////////////////////////////////////////////////////

  svgcaptcha() 
  {
    this.http.get(environment.rootUrl + 'captcha').subscribe(res => {
      this.svg = res;
      this.dataContainer.nativeElement.innerHTML = this.svg.data;
      this.loginForm.patchValue({ captchaText: this.svg.text })
    },
      error => {
        this.errorText = 'Something bad happened; please try again later.';
      });
  }


  ////////////////////////////////////////////////////////////////////

  isValidInput(fieldName: any): boolean 
  {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

}
