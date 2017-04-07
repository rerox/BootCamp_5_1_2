import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
        <div>
          <div>
            <div class="form-group">
              <label>Nazwa:</label>
              <input type="text" name="name" [(ngModel)]="name" class="form-control"></div>
            <div class="form-group">
              <label>Utwory:</label>
              <input type="text" name="tracks" [value]="tracks + ' utwory'" disabled class="form-control"></div>
            <div class="form-group">
              <label>Kolor:</label>
              <input type="color" name="color" [(ngModel)]="color">
            </div>
            <div class="form-group">
              <label><input type="checkbox" name="favourite" [(ngModel)]="favourite">Ulubiona</label>
            </div>
            <div class="form-group">
              <button class="btn btn-success float-xs-right" (click)="save()">Zapisz</button>
            </div>
          </div>
        </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  @Output('saved')
  onSave = new EventEmitter();

  save(playlist){
    this.onSave.emit(playlist)
  }

  constructor() { }

  ngOnInit() {
  }

}
