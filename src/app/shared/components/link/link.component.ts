import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html'
})
export class LinkComponent implements OnInit {
  // Whether the link is internal or external. Defaults to internal.
  @Input() internal: boolean = true;
  // The text for the link.
  @Input() text: string;
  // The url for the link.
  @Input() url: string;
  // The target for the link.
  @Input() target: string;

  constructor() { }

  ngOnInit(): void {
  }

}
