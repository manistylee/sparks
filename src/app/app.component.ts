import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9';
}

// export class SidenavModeExample {
//   mode = new FormControl('over');
//   shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
// }
