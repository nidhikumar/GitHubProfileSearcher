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
  userFlag = false;
  notEmptyPost=true;
  notscrolly=true;
  title: string;
  userData:  any;
  user: any
  modalRef: BsModalRef;
  
  
  public count =1;

  constructor( private search  : YService,private modalService: BsModalService) {   }
      
  onSearch(){
     
    this.search.getUsers(this.title).subscribe((result:any) => {
      this.userData = result.items; })
      this.userFlag= true;
     
  }
  onsort(){
      
     
    this.search.getSortUser(this.title).subscribe((result:any) => {
      this.userData = result; })


  }
  onsort1(){
      
     
    this.search.getSortUser1(this.title).subscribe((result:any) => {
      this.userData = result; })


  }

  onDetails(template : TemplateRef<any>, username  : any ){
      
     console.log(username);
      this.search.getUsername(username).subscribe((result : any) =>{
         this.user= result;
      })
      this.modalRef = this.modalService.show(template);
  
  }
  
  onScroll(){
     if(this.notscrolly && this.notEmptyPost){
           this.notscrolly=false;
           console.log("scrolled");
           this.loadNextPost();
     }
   }
  loadNextPost(){
      this.count=this.count+1; 
      this.search.getnextpage(this.title,this.count).subscribe((result:any )=>{
        const newPost = result;
        console.log(newPost);
        if(newPost.length == 0 ){
          this.notEmptyPost=false;
        }
        Array.prototype.push.apply(this.userData,newPost.items);
        console.log(this.userData,newPost.items);
        this.notscrolly=true;
      });

  }
  ngOnInit(): void {
  }


}