import { Component, OnInit } from '@angular/core';
import { RestHandlerService } from '../rest-handler.service';


interface User {
  "name": string,
  "gender": string,
  "company": string
}

interface DetailedUser extends User {
  "age": number,
  "eyeColor": string,
  "email": string,
  "phone": string,
  "address": string
}

interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent implements OnInit {

  public users!: User[];
  public detailedUsers! : DetailedUser[];
  public countries!: Country[];
  public errorMessage = 'Unautherized Access !!'
  public errorUser: boolean = false;
  public errorUserDetailed: boolean = false;
  public errorCountry: boolean = false;

  constructor(private service: RestHandlerService) {

  }
  ngOnInit(): void {

    this.service.getUserRestAPI().subscribe(
      res => {
        this.errorUser = false;
        this.users = <User[]>res;
      },
      error => {
        console.log(error)
        this.errorUser = true;
      }
    );

    this.service.getUserDetailsRestAPI().subscribe(
      res => {
        this.errorUserDetailed = false;
        this.detailedUsers = <DetailedUser[]>res;
      },
      error => {
        console.log(error)
        this.errorUserDetailed = true;
      }
    );

    this.service.getCountriesRestAPI().subscribe(
      res => {
        this.errorCountry = false;
        this.countries = <Country[]>res;
      },
      error => {
        console.log(error)
        this.errorCountry = true;
      }
    );

  }

}
