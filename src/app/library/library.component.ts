import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  librarys;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getLibrarys().subscribe((data)=>{
      console.log(data);
      this.librarys = data;
    });
  }

  }
