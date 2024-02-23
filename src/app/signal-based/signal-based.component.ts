import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signal-based',
  standalone: true,
  imports: [],
  templateUrl: './signal-based.component.html',
  styleUrl: './signal-based.component.css'
})
export class SignalBasedComponent {

    @Output() messageEvent = new EventEmitter<string>();
    private count: number = 0;

    sendMessage() {
      this.messageEvent.emit("Hello from Child Component! The Count is :" + (++this.count));
    }
}
