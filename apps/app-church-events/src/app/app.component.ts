import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@wn.corporation/api-interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'wn-corporation-root',
  standalone: true,
  template: '<router-outlet></router-outlet>',
  imports: [RouterModule],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
