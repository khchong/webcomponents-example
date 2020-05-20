import { Component, ComponentInterface, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'user-card-stencil',
  styleUrl: 'user-card-stencil.css',
  shadow: true
})
export class UserCardStencil implements ComponentInterface {

  @Prop() name: string;
  @Prop() avatar: string;

  @State() showInfo: boolean;

  @Event({
    eventName: 'deleteStencil',
    bubbles: true,
    cancelable: false,
    composed: true
  }) deleteClickStencil: EventEmitter;

  render() {
    return (
      <Host>
        <div class="user-card">
          <img src={this.avatar} alt="no-avatar" />
          <div>
            <h3>{this.name}</h3>
            <p>Stencil Web Component</p>
            <div class={{ 'info': true, 'hidden': !this.showInfo }}>
              <p><slot name="email" /></p>
            </div>
            <button id="toggle-info"
                    onClick={() => this.onToggleHideInfo()}>
              {this.showInfo ? 'Hide' : 'Show'} Info
            </button>
            <button id="delete-btn" onClick={() => this.onDeleteClick()}>Delete Me!</button>
          </div>
        </div>
      </Host>
    );
  }

  private onToggleHideInfo() {
    this.showInfo = !this.showInfo;
  }

  private onDeleteClick() {
    this.deleteClickStencil.emit();
  }

}
