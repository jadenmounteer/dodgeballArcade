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
  public SPRITE_WIDTH = 500; // The total width in px divided by the number of columns
  public SPRITE_HEIGHT = 500; // The total height in px divided by the total rows
  public BORDER_WIDTH: number = 1;
  public SPACING_WIDTH: number = 1;
  public canvas: any;
  public context: any;
  spriteSheetURL = 'assets/sprites/player/Player.png';
  public frameIndex: number = 0;
  public frame: any;
  public image = new Image();

  @Input() canvasQuery: any;

  @ViewChild('sprite', { static: true }) player1: ElementRef | undefined;

  // Animations
  private playerStandingStill: any;
  standingStillCycle: any;

  // Speeds
  walkingSpeed = 500;

  constructor(private spriteService: SpriteService) {
    this.playerStandingStill = this.spriteService.spritePositionToImagePosition(
      0,
      0,
      this.BORDER_WIDTH,
      this.SPACING_WIDTH,
      this.SPRITE_WIDTH,
      this.SPRITE_HEIGHT
    );

    this.standingStillCycle = [this.playerStandingStill];
  }

  ngAfterViewInit(): void {
    this.canvas = this.player1?.nativeElement;
    this.context = this.canvas.getContext('2d');
    this.image.src = this.spriteSheetURL;
    this.image.crossOrigin = 'true';
    this.canvasQuery = this.canvasQuery;
    this.standStill();
  }

  public standStill() {
    setInterval(() => {
      this.spriteService.animate(
        this.standingStillCycle,
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
}
