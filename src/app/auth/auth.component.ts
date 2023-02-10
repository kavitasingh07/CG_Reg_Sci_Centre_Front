import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MENUITEMS } from './menu';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit , AfterViewInit {

  mobileQuery: MediaQueryList;
  public menuItems: any;
  public userrole: any;
  private _mobileQueryListener: () => void;
  public currentUser: any; public status: any;

  constructor
  (
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public platform: Platform,
    private router: Router) 
    { 

      this.mobileQuery = media.matchMedia('(min-width: 768px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  ngOnInit(): void 
  {
    console.log("Helooo123");
    //this.status=this.currentUser.status;
     this.currentUser = 1;
    console.log("Helooo123",this.currentUser);
    if(this.currentUser == 1)
    {
      this.userrole = "HRMSADMIN";
      console.log("Helooo123Role",this.userrole);
    }
    if(this.currentUser == 2)
    {
      this.userrole = "EMPLOYEE";
    }
    else
    { 
      this.menuItems = MENUITEMS[this.currentUser.role];
    }
    
  }
  ngOnDestroy(): void 
  {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit() { }
  logout() 
  {
    
  }
}
