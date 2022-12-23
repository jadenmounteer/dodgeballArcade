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
    this.playerService.standStill();
  }

  public idle() {
    this.playerService.idle();
  }

  public walk() {
    this.playerService.walk();
  }

  public wave() {
    this.playerService.wave();
  }

  public cheer() {
    this.playerService.cheer();
  }
}
