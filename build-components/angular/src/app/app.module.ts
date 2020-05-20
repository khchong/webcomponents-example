import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { UserCardAngularComponent } from './user-card-angular/user-card-angular.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    UserCardAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const elements: any[] = [
      [UserCardAngularComponent, 'user-card-angular']
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }

  ngDoBootstrap() {}
}
