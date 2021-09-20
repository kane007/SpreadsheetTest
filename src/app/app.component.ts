import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as jspreadsheet from 'jspreadsheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild("spreadsheet") spreadsheet: ElementRef;
  title = 'basic structure';

  data = [
    ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
    ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
    ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
    ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"]
];

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          data: [
            { name:'Jorge', id:'3', age:'40', gender:'Male' },
            { name:'Cosme Sergio', id:'4', age:'48', gender:'Male' },
            { name:'Jorgina Santos', id:'5', age:'32', gender:'Female' },
        ],
        nestedHeaders: [],
        cells: [],
        columns: [
            { type:'text', width:300, name:'id', },
            { type:'text', width:200, name:'name' },
            { type:'text', width:100, name:'age' },
            { type:'hidden', width:100, name:'gender' },
         ]
        }
      ],
      
       license: 'MWEzMTE4MGFkNWY5YzQzNjE4NjZiNmE1NThhM2M0Yjc1NmUyNGM2N2YzZjU2NDQ5ZjM1MGFiYWNmOTFkNTkwODFiYmYwNDE1YjhhM2ViNGUyMzM2YjYzY2Q4NTcyMWE4MGQ4YjVjNjI2NWY4NWYyMTBjMWU5M2ZmNTU4OGI1MDQsZXlKdVlXMWxJam9pY0dGMWJDNW9iMlJsYkNJc0ltUmhkR1VpT2pFMk5UZzVOakk0TURBc0ltUnZiV0ZwYmlJNld5SnFjM0J5WldGa2MyaGxaWFF1WTI5dElpd2lZM05pTG1Gd2NDSXNJbXB6YUdWc2JDNXVaWFFpTENKc2IyTmhiR2h2YzNRaVhTd2ljR3hoYmlJNklqSWlMQ0p6WTI5d1pTSTZXeUoyTnlJc0luWTRJaXdpY0dGeWMyVnlJaXdpYzJobFpYUnpJaXdpWm05eWJYTWlMQ0p5Wlc1a1pYSWlMQ0ptYjNKdGRXeGhJbDE5'
    });
  }
}
