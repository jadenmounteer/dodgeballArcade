import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-showcase',
  templateUrl: './player-showcase.component.html',
  styleUrls: ['./player-showcase.component.scss'],
})
export class PlayerShowcaseComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  public standStill() {
    this.playerService.changePlayerBehavior('standStill');
  }

  public idle() {
    this.playerService.changePlayerBehavior('idle');
  }

  public walk() {
    this.playerService.changePlayerBehavior('walk');
  }

  public wave() {
    this.playerService.changePlayerBehavior('wave');
  }

  public cheer() {
    this.playerService.changePlayerBehavior('cheer');
  }
}
