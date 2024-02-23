import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalBasedComponent } from "./signal-based/signal-based.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SignalBasedComponent]
})
export class AppComponent {
  title = 'Angular 17 Signals';

  @Input() message!: string; // decorate the property with @Input()

  receiveMessage($event: string) {
    this.message = $event;
  }
}
