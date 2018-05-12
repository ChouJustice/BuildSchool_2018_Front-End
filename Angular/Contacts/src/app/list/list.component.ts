import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //router: any;
  constructor() {}

  Datas = [];

  ngOnInit() {
    var thRow = '<tr><th>姓名</th><th>電話</th><th>地址</th><th>備註</th><th>Edit</th></tr>'
    $('.table').html(null);
    $('.table').html(thRow);
    for(var item in localStorage)
    {
      if(item == "length") break;
      let data = JSON.parse(localStorage[item]);
      let $tr = $('<tr>').append('<td>'+data.name+'</td>'
        + '<td>'+data.tel+'</td>'
        + '<td>'+data.address+'</td>'
        + '<td>'+data.ps+'</td>'
        + '<td><a href="/form/'+item+'"  type="button" class="btn btn-primary">修改</a></td>');
      $('.table').append($tr);
    }
  }

  //goToProductDetails(id) {
  //  this.router.navigate(['/form', id]);
  //}

  SearchClick()
  {
    var thRow = '<tr><th>姓名</th><th>電話</th><th>地址</th><th>備註</th><th>Edit</th></tr>'
    $('.table').html(null);
    $('.table').html(thRow);
    if($('#SearchInput').val() == "")
    {
      this.ngOnInit();
    }
    else
    {
      for(var item in localStorage)
      {
        if(item == "length") break;
        var datas = JSON.parse(localStorage[item]);
        //console.log(datas);
        for(var data in datas)
        {
          console.log(datas[data]);
          if(datas[data].indexOf($('#SearchInput').val()) != -1)
          {
            console.log('找到了');
            console.log(datas);
            let $tr = $('<tr>').append(
                '<td>'+datas.name+'</td>'
              + '<td>'+datas.tel+'</td>'
              + '<td>'+datas.address+'</td>'
              + '<td>'+datas.ps+'</td>'
              + '<td><a href="/form/'+datas.keyval+'"  type="button" class="btn btn-primary">修改</a></td>');
            $('.table').append($tr);
          }
        }
      }
    }
  }
  

}
