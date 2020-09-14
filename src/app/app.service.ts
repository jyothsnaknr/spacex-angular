import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

  }

  getLandingData(params = {})
  {
    var url   = "https://api.spaceXdata.com/v3/launches?limit=100&";
    var query = "";
    if (Object.keys(params).length > 0)
    {
      if (params["land_success"])
      {
        var land_success  = (params["land_success"] == 1)?"true":"false";
        query             += "land_success="+land_success+"&"
      }
      if (params["launch_success"])
      {
        var launch_success = (params["launch_success"] == 1)?"true":"false";
        query             += "launch_success="+launch_success+"&"
      }
      if (params["launch_year"])
      {
        query             += "launch_year="+params["launch_year"]
      }
      url = url+query;
    }
    console.log(url)
    return this.http.get(url);
  }
}
