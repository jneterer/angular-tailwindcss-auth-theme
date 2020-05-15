import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zond-icon',
  templateUrl: './zond-icon.component.html'
})
export class ZondIconComponent implements OnInit {
  // The name of the zond-icon (you can find those in the assets/icosn directory).
  @Input() icon: string;
  // The class that represents the color of the icon. Defaults to 'default'.
  @Input() color: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
