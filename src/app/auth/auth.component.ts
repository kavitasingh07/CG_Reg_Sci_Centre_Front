import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef,EventEmitter, Component, OnInit, Output } from '@angular/core';
import { MENUITEMS } from './menu';
import { Router } from '@angular/router';
import { MasterService } from './../services/master.service';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit , AfterViewInit {
  @Output() sidenav: EventEmitter<any> = new EventEmitter();
  mobileQuery: MediaQueryList;
  public menuItems: any;   public userrole: any;
  private _mobileQueryListener: () => void;
  public menulist :any=[];   public child_menu: any = [];
  public main_menu: any = []; public role: any;
  public currentUser: any; public status: any;

  constructor
  (
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public platform: Platform,    
    private mastersevice: MasterService,
    private authService: AuthService,
    private router: Router) 
    { 

      this.mobileQuery = media.matchMedia('(min-width: 768px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  ngOnInit(): void 
  {
    this.currentUser = this.authService.currentUser;
    if(this.currentUser.role == 1)
    {
      this.userrole = "DG Admin";
    }
    if(this.currentUser == 2)
    {
      this.userrole = "Project Director Admin";
    }
    if(this.currentUser == 3)
    {
      this.userrole = "HRMS Admin";
    }
    if(this.currentUser == 4)
    {
      this.userrole = "Employee Login";
    }
    else
    { 
     // this.menuItems = MENUITEMS[this.currentUser.role];
      //this.menuItems = MENUITEMS[1];
    }
    this.getMainMenu(this.currentUser.role); 
  }

  ngOnDestroy(): void 
  {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getMainMenu(role : any) 
  {
      this.mastersevice.paramFunction('master/mainmenu',role).subscribe((res :any) => 
      {
        this.main_menu = res.data;
      });
       
      this.getChildMenu(role);  
  }

  getChildMenu(role:any) 
  {
      this.mastersevice.paramFunction('master/childmenu',role).subscribe((res :any) => 
      {
        this.child_menu = res.data;
      });
  }
   
  toggleSideBar(){
    if(window.innerWidth < 1024){
      this.sidenav.emit();
    }
  }

  ngAfterViewInit() { }
  logout() 
  {
    this.authService.logout();
  }

 
}
