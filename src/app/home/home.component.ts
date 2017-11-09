import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  person={
      name:"angular4",
      color:"RED"
  };
  list=["123","255","155","344","899","644","213"];
  clickme(val){
		alert(val);
  };
  ngOnInit() {
   
  }

}
