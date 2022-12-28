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
      this.walkDown();
    });

    this.playerService.walkUpEmitter.subscribe((newBehavior) => {
      this.walkUp();
    });

    this.playerService.walkLeftEmitter.subscribe((newBehavior) => {
      this.walkLeft();
    });

    this.playerService.walkRightEmitter.subscribe((newBehavior) => {
      this.walkRight();
    });

    this.playerService.walkTopRightEmitter.subscribe((newBehavior) => {
      this.walkTopRight();
    });

    this.playerService.walkTopLeftEmitter.subscribe((newBehavior) => {
      this.walkTopLeft();
    });

    this.playerService.walkBottomLeftEmitter.subscribe((newBehavior) => {
      this.walkBottomLeft();
    });

    this.playerService.walkBottomRightEmitter.subscribe((newBehavior) => {
      this.walkBottomRight();
    });
  }

  private convertPosToString(newPosition: number): string {
    return `${newPosition}px`;
  }

  private walkDown() {
    this.playerTopPos += 1;
    this.playerTopPosString = this.convertPosToString(this.playerTopPos);
  }

  private walkUp() {
    this.playerTopPos -= 1;
    this.playerTopPosString = this.convertPosToString(this.playerTopPos);
  }

  private walkLeft() {
    this.playerLeftPos -= 1;
    this.playerLeftPosString = this.convertPosToString(this.playerLeftPos);
  }

  private walkRight() {
    this.playerLeftPos += 1;
    this.playerLeftPosString = this.convertPosToString(this.playerLeftPos);
  }

  private walkTopRight() {
    this.walkUp();
    this.walkRight();
  }

  private walkTopLeft() {
    this.walkLeft();
    this.walkUp();
  }

  private walkBottomLeft() {
    this.walkLeft();
    this.walkDown();
  }

  private walkBottomRight() {
    this.walkRight();
    this.walkDown();
  }
}
