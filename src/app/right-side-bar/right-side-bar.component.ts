import { Component } from '@angular/core';
import { Comment } from '../model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent {
  comments: Comment[] = []
  isOpen = false

  constructor( private apiService: ApiService) {}

  getComments() {
    this.apiService.getAllData().subscribe((data: any) => {
      console.log(data?.comments);
      console.log(this.isOpen)
      this.comments = data?.comments
    }); 
  }

  toggleComments() {
    this.isOpen = !this.isOpen;
    this.getComments()
  }
}