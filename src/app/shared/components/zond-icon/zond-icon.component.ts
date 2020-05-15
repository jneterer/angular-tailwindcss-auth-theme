import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zond-icon',
  templateUrl: './zond-icon.component.html'
})
export class ZondIconComponent implements OnInit {
  @Input() icon: string;
  @Input() color: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
