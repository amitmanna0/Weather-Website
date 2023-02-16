import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Weather';

  WeatherData?: WeatherData;
  cityName = 'howrah';
  constructor(private service: WeatherService){}

  ngOnInit(): void {
    this.getWeather(this.cityName);
  }
  onSubmit()
  {
    this.getWeather(this.cityName);
    // this.cityName='';
  }
  private getWeather(cityName: string)
  {
    this.service.getWeatherData(cityName)
    .subscribe({
      next: (response)=>{
        this.WeatherData=response;
        console.log(response);
      }
    })
  }

}
