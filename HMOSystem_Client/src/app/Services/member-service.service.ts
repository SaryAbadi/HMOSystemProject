import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';
import { Members } from '../Classes/Members';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  baseUrl = 'https://localhost:5001/api/Members/';
  constructor(private http: HttpClient) { }

  getMembers(): Observable<any> {
    var res = this.http.get<any>(this.baseUrl + "GetMembers");
    return res;
  }
  addMember(member: Members): Observable<any> {
    return this.http.post<any>(this.baseUrl + "AddMember", member);
  }
  updateMember(member: Members): Observable<any> {
    var res = this.http.put<any>(this.baseUrl + 'UpdateMember', member);
    return res;
  }
  deleteMember(id:string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + "DeleteMember?id=" + id);
  }
  // notVaccination(x:number): Observable<any>{
  //   return this.http.notVaccination<any>(this.baseUrl + "notVaccination" + x);
}
