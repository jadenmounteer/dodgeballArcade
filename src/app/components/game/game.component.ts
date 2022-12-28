import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public playerTopPos: string = '200px';
  public playerLeftPos: string = '500px';

  constructor() {}

  ngOnInit(): void {}
}
