import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'externalApp';

  loader = true;

  ngOnInit() {
    setTimeout(()=>{   // <<<---using ()=> syntax
      this.loader = false;
    }, 3000);
  }
}
