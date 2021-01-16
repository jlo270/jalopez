import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  
})
export class HeaderComponent implements OnInit {

  constructor( private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { 
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#scrollTarget',
    })
  }

  ngOnInit(): void {
  }

 

  
}
