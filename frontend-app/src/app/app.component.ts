import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public loginText: 'Login' | 'Logout' = "Login";
  public isLoggedIn: boolean = false;
  public userName: string = 'Guest';
  public userProfile!: KeycloakProfile;

  constructor(private keycloak: KeycloakService) {

  }


  async ngOnInit() {

    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.loginText = 'Logout';
      this.userName = await this.getUserName();
    } else {
      this.loginText = 'Login';
      this.userName = 'Guest'
    }




  }

  private async getUserName() {
    this.userProfile = await this.keycloak.loadUserProfile();
    return this.userProfile.firstName + ", " + this.userProfile.lastName;
  }



  public async loginLogout() {

    console.log('clicked');

    if (this.loginText === 'Login') {

      await this.keycloak.login({ redirectUri: "http://localhost:4200/" });
      this.loginText = 'Logout';
      this.userName = await this.getUserName();

    }
    if (this.loginText === 'Logout') {
      this.keycloak.logout("http://localhost:4200/");
      this.loginText = 'Login';
      this.userName = 'Guest';

    }

  }

}
