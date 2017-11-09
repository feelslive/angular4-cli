import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comnav',
  templateUrl: './comnav.component.html',
  styleUrls: ['./comnav.component.css']
})
export class ComnavComponent implements OnInit {

  @Input() nav
  constructor() { }

  ngOnInit() {
  }

}
