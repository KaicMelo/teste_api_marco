import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() background!: string;
  @Input() header!: string;
  @Input() subtitle!: string;
  @Input() textCenter!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
