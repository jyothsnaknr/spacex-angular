import { Component } from '@angular/core';
import { AppService } from './app.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'spacex';
  landingData;
  launchYear;
  launchSuccess;
  landSuccess;
  params = { 
    "launch_year" : "",
    "land_success" : "",
    "launch_success" : ""
  };

  constructor(private appService:AppService,private location: Location)
  {
    console.log(this.params)
      this.refreshData();
  }

  ngOnInit() {

  }

  filterLaunchData(data)
  { 
      this.params.launch_success = data
      this.refreshData()
      //this.location.replaceState("/some/newstate/");
      this.location.go('?launch_success='+data)
  }

  filterLandData(data)
  {
      this.params.land_success = data
      this.refreshData()
  }

  filterYearData(data)
  {
      this.params.launch_year = data
      this.refreshData()
  }

  refreshData()
  {
      this.appService.getLandingData(this.params).subscribe((data)=>{
          this.landingData = data;
          console.log(this.getUrl())
          if (this.getUrl() && typeof this.getUrl() != "undefined")
          {
            console.log(this.getUrl())
            this.location.go('?'+this.getUrl());
          }
      }); 
  }

  getUrl()
  {
      var query = ""; 
      if (this.params.land_success)
      {
        query             += "land_success="+this.params.land_success+"&"
      }
      if (this.params.launch_success)
      {
        query             += "launch_success="+this.params.launch_success+"&"
      }
      if (this.params.launch_year)
      {
        query             += "launch_year="+this.params.launch_year
      }
      return query;
  }
}
