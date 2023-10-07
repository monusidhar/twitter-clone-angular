import { Component, Input } from '@angular/core';

@Component({
  selector: 'twitter-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() show: boolean = false;
}
