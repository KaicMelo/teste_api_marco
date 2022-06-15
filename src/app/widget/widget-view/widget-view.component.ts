import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-view',
  templateUrl: './widget-view.component.html',
  styleUrls: ['./widget-view.component.css'],
})
export class WidgetViewComponent implements OnInit {
  @Input() background!: string;
  @Input() title!: string;
  @Input() height!: number;
  @Input() subtitle!: string;
  @Input() textCenter!: string;

  constructor() {}

  ngOnInit(): void {}
}
