import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { SpriteComponent } from '../sprite/sprite.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent
  extends SpriteComponent
  implements AfterViewInit, OnInit
{
  public override SPRITE_WIDTH = 128; // The total width in px divided by the number of columns
  public override SPRITE_HEIGHT = 128; // The total height in px divided by the total rows

  // Spritesheets from Piskel seem to not have a border or spacing
  public override BORDER_WIDTH: number = 0;
  public override SPACING_WIDTH: number = 0;

  public override canvas: any;
  public override context: any;
  spriteSheetURL = 'assets/sprites/player/Player.png';
  public override frameIndex: number = 0;
  public override frame: any;
  public override image = new Image();

  @Input() canvasQuery: any;

  @ViewChild('sprite', { static: true }) player1: ElementRef | undefined;

  constructor(private playerService: PlayerService) {
    super();
  }

  /*** Images ***/
  private playerStandingStill: any = this.spritePositionToImagePosition(0, 0);
  private playerStretching1: any = this.spritePositionToImagePosition(0, 1);
  private playerStretching2: any = this.spritePositionToImagePosition(0, 2);
  private playerFirstFootRaised: any = this.spritePositionToImagePosition(1, 1);
  private playerSecondFootRaised: any = this.spritePositionToImagePosition(
    1,
    3
  );
  private playerWave1: any = this.spritePositionToImagePosition(2, 1);
  private playerWave2: any = this.spritePositionToImagePosition(2, 2);
  private armsRaised1: any = this.spritePositionToImagePosition(3, 1);
  private armsRaised2: any = this.spritePositionToImagePosition(3, 2);

  /*** ANIMATIONS ***/

  // Standing still
  private standingStillCycle: any = [this.playerStandingStill];

  // Idle
  private playerIdleCycle: any = [
    this.playerStandingStill,
    this.playerStretching1,
    this.playerStretching2,
  ];

  // Walking
  private playerWalkCycle: any = [
    this.playerStandingStill,
    this.playerFirstFootRaised,
    this.playerStandingStill,
    this.playerSecondFootRaised,
  ];

  // Waving
  private playerWaveCycle: any = [
    this.playerStandingStill,
    this.playerStandingStill,
    this.playerStandingStill,
    this.playerWave1,
    this.playerWave2,
    this.playerWave1,
    this.playerWave1,
    this.playerWave2,
  ];

  // Cheering
  private playerCheeringCycle: any = [
    this.playerStandingStill,
    this.playerStandingStill,
    this.playerStandingStill,
    this.armsRaised1,
    this.armsRaised2,
    this.armsRaised1,
    this.armsRaised2,
    this.armsRaised1,
    this.armsRaised2,
    this.armsRaised1,
    this.armsRaised2,
  ];

  // Speeds
  walkingSpeed = 500;
  wavingSpeed = 200;

  ngOnInit(): void {
    this.playerService.behaviorEmitter.subscribe((newBehavior) => {
      this.handleNewBehavior(newBehavior);
    });
  }

  ngAfterViewInit(): void {
    this.canvas = this.player1?.nativeElement;
    this.context = this.canvas.getContext('2d');
    this.image.src = this.spriteSheetURL;
    this.image.crossOrigin = 'true';
    this.canvasQuery = this.canvasQuery;
    // this.standStill();
    // this.idle();
    // this.walk();
    // this.wave();
    // this.cheer();
  }

  private handleNewBehavior(newBehavior: string) {
    switch (newBehavior) {
      case 'standStill':
        this.standStill();
        break;

      case 'idle':
        this.idle();
        break;

      case 'walk':
        this.walk();
        break;

      case 'wave':
        this.wave();
        break;

      case 'cheer':
        this.cheer();
        break;
    }
  }

  public standStill() {
    setInterval(() => {
      this.animate(this.standingStillCycle);
    }, this.walkingSpeed);
  }

  public idle() {
    setInterval(() => {
      this.animate(this.playerIdleCycle);
    }, this.walkingSpeed);
  }

  public walk() {
    setInterval(() => {
      this.animate(this.playerWalkCycle);
    }, this.walkingSpeed);
  }

  public wave() {
    setInterval(() => {
      this.animate(this.playerWaveCycle);
    }, this.wavingSpeed);
  }

  public cheer() {
    setInterval(() => {
      this.animate(this.playerCheeringCycle);
    }, this.wavingSpeed);
  }
}
