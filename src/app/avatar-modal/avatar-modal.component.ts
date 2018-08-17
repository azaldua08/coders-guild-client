import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-modal',
  templateUrl: './avatar-modal.component.html',
  styleUrls: ['./avatar-modal.component.css']
})

// Link to Bootstrap 3 implementation of Modal: https://stackoverflow.com/questions/34513558/angular-2-0-and-modal-dialog
export class AvatarModalComponent implements OnInit {
  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
