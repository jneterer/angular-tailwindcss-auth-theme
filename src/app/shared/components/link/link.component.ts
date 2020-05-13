import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html'
})
export class LinkComponent implements OnInit {
  @Input() internal: boolean = true;
  @Input() text: string;
  @Input() url: string;
  @Input() target: string;

  constructor() { }

  ngOnInit(): void {
  }

}
