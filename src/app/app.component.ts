import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  data: any;
  activeTab: string = 'objectives';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllData().subscribe((data) => {
      this.data = data;
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
