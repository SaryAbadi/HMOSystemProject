import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MemberServiceService } from 'src/app/Services/member-service.service';
import { Members } from 'src/app/Classes/Members';


@Component({
  selector: 'app-member-dialog',
  templateUrl: './member-dialog.component.html',
  styleUrls: ['./member-dialog.component.css']
})
export class MemberDialogComponent implements OnInit {

  memberForm: FormGroup
  members: Members[] = [];
  constructor(private dialogRef: MatDialogRef<MemberDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public memberService: MemberServiceService) {
    console.log(data.member);
    this.memberForm = this.fb.group({
      'memberFirstName': new FormControl('', Validators.required),
      'memberLastName': new FormControl('', Validators.required),
      'memberId': new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
      'city': new FormControl('', Validators.required),
      'street': new FormControl('', Validators.required),
      'numHouse': new FormControl('', [Validators.required, Validators.min(1)]),
      'birthday': new FormControl('', Validators.required),
      'telephone': new FormControl('', [Validators.pattern('[0-9]{9}')]),
      'mobilePhone': new FormControl('', [Validators.required, Validators.pattern('05?[0-9]-?[0-9]{8}')]),
      'positiveDate': new FormControl(''),
      'recoveryDate': new FormControl(''),
      'dateVaccination1': new FormControl(''),
      'manufacturer1': new FormControl(''),
      'dateVaccination2': new FormControl(''),
      'manufacturer2': new FormControl(''),
      'dateVaccination3': new FormControl(''),
      'manufacturer3': new FormControl(''),
      'dateVaccination4': new FormControl(''),
      'manufacturer4': new FormControl('')
    });
  }

  ngOnInit(): void {

  }

  save_member() {
    if (this.data.member.memberId) {
      this.memberService.updateMember(this.data.member).subscribe((data: any) => {
        this.members = data;
        this.dialogRef.close(this.members)
      });

    }
    else {
      if (this.data.member.positiveDate == "01.01.0001")
        delete this.data.member.positiveDate;
      if (this.data.member.recoveryDate == "01.01.0001")
        delete this.data.member.recoveryDate;
       
        this.data.member.vaccinations.forEach((element :any) => {
          if (element.dateVaccination == "01.01.0001")
          delete element.dateVaccination;
  
      });

      this.memberService.addMember(this.data.member).subscribe((success: any) => {
        alert("החבר הוסף בהצלחה")
        this.members = success;
        this.dialogRef.close(this.members);
      },

        (error: any) => {
          alert(error.message);
        })
    }


  }

  deleteMember() {
    this.memberService.deleteMember(this.data.member.memberId).subscribe((success: any) => {
      alert("החבר הוסר בהצלחה")
      this.members = success;
      this.dialogRef.close(this.members);
    },
      (error: any) => {
        alert(error.message);
      })
  }
  addVaccination() {
    if (this.data.member.vaccinations.length < 4)
      this.data.member.vaccinations.push({ dateVaccination: new Date(), manufacturer: ""});
  }

}
