import { Component } from '@angular/core';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ TodoComponent, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
}
