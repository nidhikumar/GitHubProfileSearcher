import { Component, OnInit } from '@angular/core';
import  {YService} from '../y.service'
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { from } from 'rxjs';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
public users:any;
public searchdata:any;
public userFlag=false;
public divFlag=0;
public secondData:any;
modalRef: BsModalRef;
perPage = 6;
  currPage = 1;

  constructor(private profileservice:YService,private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>,user) {
    this.modalRef = this.modalService.show(template);
    this.profileservice.getSecondApi(user).subscribe(data =>
      {
        
        this.secondData=data;
        console.log(this.secondData);
      }

    )
  }

  setPage(event){
    this.currPage = event;
  }

  ngOnInit(): void {
    
  }
  search()
  {
    this.profileservice.getData(this.users).subscribe(data=>
      {
        this.searchdata=data;
      });
      this.userFlag=true;
  }
  setDivFlag()
  {
    this.divFlag=1;
  }
  hightolow(){
    this.profileservice.hightolow();

  }
  lowtohigh(){
    this.profileservice.lowtohigh();
  }
     
  

}