import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  private playerTopPos: number = 0;
  private playerLeftPos: number = 0;
  public playerTopPosString: string = '0px';
  public playerLeftPosString: string = '0px';

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.walkDownEmitter.subscribe((newBehavior) => {
      this.walkDown(newBehavior);
    });
  }

  private walkDown(newBehavior: string) {
    switch (newBehavior) {
      case 'walk':
        this.playerTopPos += 1;

        this.playerTopPosString = `${this.playerTopPos}px`;
        console.log(this.playerTopPosString);
        break;
    }
  }
}
