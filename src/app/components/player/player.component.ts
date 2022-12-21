import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { SpriteComponent } from '../sprite/sprite.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent extends SpriteComponent implements AfterViewInit {
  public override SPRITE_WIDTH = 500; // The total width in px divided by the number of columns
  public override SPRITE_HEIGHT = 500; // The total height in px divided by the total rows
  public override BORDER_WIDTH: number = 1;
  public override SPACING_WIDTH: number = 1;
  public override canvas: any;
  public override context: any;
  spriteSheetURL = 'assets/sprites/player/Player.png';
  public override frameIndex: number = 0;
  public override frame: any;
  public override image = new Image();

  @Input() canvasQuery: any;

  @ViewChild('sprite', { static: true }) player1: ElementRef | undefined;

  // Animations
  private playerStandingStill: any = this.spritePositionToImagePosition(0, 0);
  private standingStillCycle: any = [this.playerStandingStill];

  // Speeds
  walkingSpeed = 500;

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
      this.animate(this.standingStillCycle);
    }, this.walkingSpeed);
  }
}
