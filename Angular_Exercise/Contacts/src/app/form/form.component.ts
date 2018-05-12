import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if($('#Title').attr('name') != 'none')
    {
      console.log($('#Title').attr('name'));
    }
    let url=location.href
    
    if(url != 'http://localhost:4200/form')
    {
      //console.log(url);
      let str=url.split('/');
      //console.log(str);
      $("#inputName").val(JSON.parse(localStorage[str[4]]).name);
      $("#inputTel").val(JSON.parse(localStorage[str[4]]).tel);
      $("#inputadd").val(JSON.parse(localStorage[str[4]]).address);
      $("#inputps").val(JSON.parse(localStorage[str[4]]).ps)
    }
  }

  button_click()
  {
    let url=location.href
    let str=url.split('/');
    if(url == 'http://localhost:4200/form')
    {
      var Day = new Date();
      var key = Day.getFullYear().toString()+Day.getMonth().toString()+Day.getDate().toString()+Day.getHours().toString()+Day.getMinutes().toString()+Day.getSeconds().toString();
      var data = {
        keyval : key,
        name : $("#inputName").val(),
        tel:$("#inputTel").val(),
        address:$("#inputadd").val(),
        ps:$("#inputps").val(),
      }
      localStorage.setItem(data.keyval,JSON.stringify(data));
    }
    else
    {
      var data = {
        keyval : str[4],
        name : $("#inputName").val(),
        tel:$("#inputTel").val(),
        address:$("#inputadd").val(),
        ps:$("#inputps").val(),
      }
      console.log(str[4]);
      localStorage.setItem(str[4],JSON.stringify(data));
    }
  }

}
