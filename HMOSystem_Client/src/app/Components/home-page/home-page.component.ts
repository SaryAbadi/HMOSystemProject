import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MemberDialogComponent } from '../member-dialog/member-dialog.component';
import { Members } from 'src/app/Classes/Members';
import { MemberServiceService } from 'src/app/Services/member-service.service';
import { vaccinations } from 'src/app/Classes/Vaccinations';
import { ViewEncapsulation, ViewChild } from '@angular/core';
import { ILoadedEventArgs, ChartComponent, ChartTheme, IPointRenderEventArgs, ITooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource: any;
  members: Members[] = [];
  x: any;

  constructor(private router: Router, private dialog: MatDialog, private memberService: MemberServiceService) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data: any) => {
      console.log(data);
      this.members = data;
      this.dataSource = new MatTableDataSource<Members>(this.members);
    });
    

      // this.memberService.notVaccination(x: number)=>{
      //   this.x= result;
      // }
       
   

  }
  selected_row(row: any) {
    const dialogRef = this.dialog.open(MemberDialogComponent,
      {
        width: '700px',
        data: { member: row }
      });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.members = result;
        this.dataSource = new MatTableDataSource<Members>(this.members);
      }
    })
  }

  add() {
    const mem: Members = new Members('', '', '', '', '', '', 0, null, '', '', null, null, [new vaccinations(null, '')]);
    const dialogRef = this.dialog.open(MemberDialogComponent,
      {
        width: '700px',
        data: { member: mem }
      });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.members = result;
        this.dataSource = new MatTableDataSource<Members>(this.members);
      }
    })
  }
}

/**
 * Sample for Column Series with rounded corner
 */

// export class RoundedColumnChartComponent {
//     @ViewChild('roundcol')
//     // public chart: ChartComponent;
//     public pointRender(args: IPointRenderEventArgs): void {
//        this.SetTheme(args);
//     };
//     public SetTheme(args: IPointRenderEventArgs): void {
//         if (location.hash.indexOf("material") > -1)
//         {
//             if (location.hash.indexOf("dark") > -1)
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "#f9fafb";                
//             }
//             else
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "grey";               
//             }
//         }
//         else if (location.hash.indexOf("fabric") > -1)
//         {
//             if (location.hash.indexOf("dark") > -1)
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "#f9fafb";
//             }
//             else
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "grey";
//             }
//         }
//         else if (location.hash.indexOf("bootstrap5") > -1)
//         {
//             if (location.hash.indexOf("dark") > -1)
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "#f9fafb";
//             }
//             else
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "grey";
//             }
//         }
//         else if (location.hash.indexOf("fluent") > -1)
//         {
//             if (location.hash.indexOf("dark") > -1)
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "#f9fafb";
//             }
//             else
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "grey";
//             }
//         }
//         else if (location.hash.indexOf("bootstrap4") > -1)
//         {
//             if (args.series.yName == "Rate")
//                 args.fill = "grey";
//         }
//         else if (location.hash.indexOf("bootstrap") > -1)
//         {
//             if (location.hash.indexOf("dark") > -1)
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "#f9fafb";
//             }
//             else
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "grey";
//             }
//         }
//         else if (location.hash.indexOf("tailwind") > -1)
//         {
//             if (location.hash.indexOf("dark") > -1)
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "#f9fafb";
//             }
//             else
//             {
//                 if (args.series.yName == "Rate")
//                     args.fill = "grey";
//             }
//         }
//         else if (location.hash.indexOf("highcontrast") > -1)
//         {
//             if (args.series.yName == "Rate")
//                 args.fill = "#f9fafb";
//         }
//         else
//         {
//             if (args.series.yName == "Rate")
//                 args.fill = "grey";
//         }
//      };
//     public data: Object[] = [
//         { Country : "Niger", Rate : 100, Literacy_Rate : 19.1, Text : "19.1%" },
//         { Country : "Sierra Leone", Rate : 100, Literacy_Rate : 48.1, Text : "48.1%" },
//         { Country : "South Sudan", Rate : 100, Literacy_Rate : 26.8, Text : "26.8%" },
//         { Country : "Nepal", Rate : 100, Literacy_Rate : 64.7, Text : "64.7%" },
//         { Country : "Gambia", Rate : 100, Literacy_Rate : 55.5, Text : "55.5%" },
//         { Country : "Gyana", Rate : 100, Literacy_Rate : 88.5, Text : "88.5%" },
//         { Country : "Kenya", Rate : 100, Literacy_Rate : 78.0, Text : "78.0%" },
//         { Country : "Singapore", Rate : 100, Literacy_Rate : 96.8, Text : "96.8%" }
//     ];
//     //Initializing Primary X Axis
//     public primaryXAxis: Object = {
//         valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 },
//     };
//     //Initializing Primary Y Axis
//     public primaryYAxis: Object = {
//         labelFormat: '{value}%',
//         title: 'Literacy Rate In Percentage',
//         minimum: 0, maximum: 100, interval: 20, majorTickLines: { width: 0 },
//         minorTickLines: { width: 0 }, lineStyle: { width: 0 }
//     };
//     public radius: Object = { bottomLeft: 35, bottomRight: 35, topLeft: 35, topRight: 35 }
//     public marker: Object = { dataLabel: { visible: true, position: 'Top', name:'Text', font: { fontWeight: '600', color: '#ffffff' } } }
//     public title: string = 'Literacy rate by Country in 2015';
//     public tooltip: Object = {
//         enable: true,
//         header: '<b>${point.x}</b>',
//         format : 'Rate : <b>${point.tooltip}</b>'
//     };
//     public legend: Object = {
//         visible: false
//     }
//     public chartArea: Object = {
//         border: {
//             width: 0
//         }
//     };
//     public placement: boolean = false;
//     public width: string = Browser.isDevice ? '100%' : '75%';
//    // custom code start
//     public load(args: ILoadedEventArgs): void {
//         let selectedTheme: string = location.hash.split('/')[1];
//         selectedTheme = selectedTheme ? selectedTheme : 'Material';
//         args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
//     };
//     constructor() {
//         //code
//     };
// }

