import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loader = true;

  ngOnInit() {
    setTimeout(()=>{   // <<<---using ()=> syntax
      this.loader = false;
    }, 3000);
  }
}
