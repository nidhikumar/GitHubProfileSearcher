import { Component, OnInit, Input } from '@angular/core';
import  {YService} from '../y.service'
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { from } from 'rxjs';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Subscription } from 'rxjs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  public search;
  public users:any;
  public userFlag=false;
  public userDetail;
  totalItems = 30;
  currentPage = 1;
  page=1;
  perPage=6;
  notEmptyPost=true;
  notscrolly=true;
  count=1;
  modalRef: BsModalRef;
  constructor( private userservice  : YService,private modalService: BsModalService, private spinner: NgxSpinnerService) {   }
      
  searchUser()
  {

     this.userservice.searchUser1(this.search).subscribe(
       (data:any)=>{this.users=data.items;}
       
     )
     this.userFlag=true;
  }
  highToLow()
  {
    this.userservice.highToLow(this.search);
  }
  openModal(template: TemplateRef<any>,username)
  {
   // console.log(username);
    this.modalRef = this.modalService.show(template);
    this.userservice.userDetail(username).subscribe(
       data=>{this.userDetail=data;
        console.log(this.userDetail);
      })
  }

  setPage(event)
  {
    this.page=event;
  }
  onScroll(){
    if(this.notscrolly && this.notEmptyPost){
          this.notscrolly=false;
          console.log("scrolled");
          this.spinner.show();
          this.loadNextPost();
    }
  }
 loadNextPost(){
     
     this.userservice.getnextpage(this.search,this.count).subscribe((result:any )=>{
       const newPost = result;
       console.log(newPost);
       if(newPost.length == 0 ){
         this.notEmptyPost=false;
       }
       Array.prototype.push.apply(this.users,result.items);
       console.log(this.users,newPost.items);
       this.count=this.count+1; 
       this.spinner.hide();
       this.notscrolly=true;
     });

 }
 ngOnInit(): void {
}
}


