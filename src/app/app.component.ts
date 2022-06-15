import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: () => this.router.navigate(['/']) },
    { label: 'Widget', action: () => this.router.navigate(['/widget']) },
  ];
}
