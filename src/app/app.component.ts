import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = '第一个angular项目';
	nav=[
		{name:"首页",url:'/'},
		{name:"详情",url:'/Details/:id'},
		{name:"关于",url:'/About'}
	];
}
