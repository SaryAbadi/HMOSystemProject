import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MemberDialogComponent } from '../member-dialog/member-dialog.component';
import { Members } from 'src/app/Classes/Members';
import { MemberServiceService } from 'src/app/Services/member-service.service';
import { vaccinations } from 'src/app/Classes/Vaccinations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource: any;
  members: Members[] = [];

  constructor(private router: Router, private dialog: MatDialog, private memberService: MemberServiceService) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data: any) => {
      console.log(data);
      this.members = data;
      this.dataSource = new MatTableDataSource<Members>(this.members);
    });
    //   this.memberService.getMembers().subscribe((data: any) => {
    //     this.members = data;
    //     this.dataSource = new MatTableDataSource<Members>(this.members);
    //   },
    // (error: any) => {
    //   alert(error.message);
    // });
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
    const mem: Members = new Members('', '', '', '', '', '', 0, new Date(), '', '', new Date(), new Date(), [new vaccinations(new Date(), '')]);
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

