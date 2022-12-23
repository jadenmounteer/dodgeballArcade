import { Component, HostListener, OnInit } from '@angular/core';
import { PlayerService } from './services/player.service';
// import { KEY_CODE } from './types/key-codes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  // When the user presses a key down...
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.playerService.changePlayerBehavior('walk');
    } else if (event.key === 'ArrowDown') {
      this.playerService.changePlayerBehavior('walk');
    } else if (event.key === 'ArrowLeft') {
      this.playerService.changePlayerBehavior('walk');
    } else if (event.key === 'ArrowRight') {
      this.playerService.changePlayerBehavior('walk');
    }
  }

  // When the user releases a key...
  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.playerService.changePlayerBehavior('standStill');
    } else if (event.key === 'ArrowDown') {
      this.playerService.changePlayerBehavior('standStill');
    } else if (event.key === 'ArrowLeft') {
      this.playerService.changePlayerBehavior('standStill');
    } else if (event.key === 'ArrowRight') {
      this.playerService.changePlayerBehavior('standStill');
    }
  }

  title = 'dodgeball-arcade';

  ngOnInit(): void {
    window.addEventListener(
      'keydown',
      (e) => {
        e.preventDefault();
      },
      {
        capture: true, // this disables arrow key scrolling in modern Chrome
        passive: false, // this is optional, my code works without it
      }
    );
  }

  private preventKeyScrolling() {
    window.addEventListener(
      'keydown',
      (e) => {
        e.preventDefault();
      },
      {
        capture: true, // this disables arrow key scrolling in modern Chrome
        passive: false, // this is optional, my code works without it
      }
    );
  }
}
