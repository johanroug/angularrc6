import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2</h1>
    {{title}}
  `,
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  public title;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this._httpService.getData()
      .subscribe(
        (data) => {
          this.title = data;
        }
      );
  }
}
