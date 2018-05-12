import { Component } from '@angular/core';
import { NumerologyCalculator } from './module/numerology-calculator';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  year = 0;
  month = 0;
  day = 0;

  buttonClick() {
    let star = new NumerologyCalculator(this.year, this.month, this.day);

    var LifeNum = star.getLifeNumerology();
    var Star = star.getAstrologyConstellationName();
    //console.log(LifeNum);
    //console.log(Star);  

    $.ajax({
      url: "https://gist.githubusercontent.com/regionbbs/a4633c99d4f3d73c41538134b0b62162/raw/9b81dd8ae2bbe0b088d54c2118e5eb2d1021313f/" + Star + ".json",
      type: 'GET'
    }).done(function (data) {
      //console.log(data);
      $('#number').val(LifeNum);
      $('#star').val(JSON.parse(data).name);
      $('#text').val(JSON.parse(data).lookup[LifeNum - 1])
      //console.log(data);
      //console.log(JSON.parse(data).lookup[LifeNum - 1]);
    });
  }
}
