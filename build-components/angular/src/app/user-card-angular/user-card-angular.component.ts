import { Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'user-card-angular',
  templateUrl: './user-card-angular.component.html',
  styleUrls: ['./user-card-angular.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserCardAngularComponent {

  @Input() name: string;
  @Input() avatar: string;

  @Output() deleteAngular = new EventEmitter();

  showInfo = false;

  constructor(private el: ElementRef) { }

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }

  deleteClick() {
    this.deleteAngular.emit();
  }
}
