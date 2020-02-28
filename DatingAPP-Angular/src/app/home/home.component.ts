import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values : any;
  registerMode = false;
  apiURL = 'http://localhost:5000/api/values';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle() {
    this.registerMode = true;
  }
  getValues()
  {
    this.http.get(this.apiURL).subscribe(response =>
    { 
        this.values = response;
        console.log(this.values);
    }, error => {
        console.log(error);
    });
  }
  cancelRegisterMode(registartionMode: boolean)
  {
    this.registerMode = registartionMode;
  }
}
