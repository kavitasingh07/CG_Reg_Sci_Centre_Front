import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { MaterialModule } from './material-module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,    
    NgbModule,
    FullCalendarModule,
    HttpClientModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return sessionStorage.getItem('token');
        },
        // whitelistedDomains: ['localhost:3000'],
        // blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
