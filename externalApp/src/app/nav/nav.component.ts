import { Component, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loader = true;
  counter = 1;

  constructor(private renderer:Renderer2){

  }

  ngOnInit() {
    setTimeout(()=>{   // <<<---using ()=> syntax
      this.loader = false;
    }, 3000);
  }
  
  selectComponent(event:any) {
    console.log(event.target);
    //this.renderer.removeClass('a', 'dropdown-menu-active');
    //this.renderer.addClass(event.target,"dropdown-menu-active");
   }

   incrementCounter(){
    this.counter++;
   }
}
