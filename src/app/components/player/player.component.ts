import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { SpriteService } from 'src/app/services/sprite.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements AfterViewInit {
  public SPRITE_WIDTH = 228; // The total width in px divided by the number of columns
  public SPRITE_HEIGHT = 228; // The total height in px divided by the total rows
  public BORDER_WIDTH: number = 1;
  public SPACING_WIDTH: number = 1;
  public canvas: any;
  public context: any;
  spriteSheetURL = 'assets/sprites/player/Player.png'; // TODO this path might be wrong
  // misc
  public frameIndex: number = 0;
  public frame: any;
  public image = new Image();

  @Input() canvasQuery: any;

  @ViewChild('sprite', { static: true }) player1: ElementRef | undefined;

  // Animations
  playerIcon0: any;
  playerIcon1: any;
  walkCycle: any;

  // Speeds
  walkingSpeed = 500;

  constructor(private spriteService: SpriteService) {
    this.playerIcon0 = this.spriteService.spritePositionToImagePosition(
      0,
      0,
      this.BORDER_WIDTH,
      this.SPACING_WIDTH,
      this.SPRITE_WIDTH,
      this.SPRITE_HEIGHT
    );
    this.playerIcon1 = this.spriteService.spritePositionToImagePosition(
      0,
      0,
      this.BORDER_WIDTH,
      this.SPACING_WIDTH,
      this.SPRITE_WIDTH,
      this.SPRITE_HEIGHT
    );
    this.walkCycle = [this.playerIcon0, this.playerIcon1];
  }

  ngAfterViewInit(): void {
    this.canvas = this.player1?.nativeElement;
    this.context = this.canvas.getContext('2d');
    this.image.src = this.spriteSheetURL;
    this.image.crossOrigin = 'true';
    this.canvasQuery = this.canvasQuery;
    this.appear();
  }

  appear() {
    setInterval(() => {
      this.spriteService.animate(
        this.walkCycle,
        this.frameIndex,
        this.frame,
        this.context,
        this.canvas,
        this.image,
        this.SPRITE_WIDTH,
        this.SPRITE_HEIGHT
      );
    }, this.walkingSpeed);
  }

  // walkLeft() {
  //   setInterval(() => {
  //     this.animate(this.walkCycle);
  //   }, this.walkingSpeed);
  // }

  // getXCoordinate() {
  //   return this.canvas.getBoundingClientRect().x;
  // }
}
