import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ids:number;
  constructor(private route: ActivatedRoute) { 
  		this.ids = this.route.snapshot.params['id'];
  		console.log(this.ids)
   }

  ngOnInit() {
  }

}
