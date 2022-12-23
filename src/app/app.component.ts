import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dodgeball-arcade';

  ngOnInit(): void {
    this.handleKeyBoardEvents();
  }

  private handleKeyBoardEvents() {
    window.addEventListener(
      'keydown',
      (e) => {
        e.preventDefault();

        if (e.key === 'ArrowUp') {
          console.log('Up');
        } else if (e.key === 'ArrowDown') {
          console.log('Down');
        } else if (e.key === 'ArrowLeft') {
          console.log('Left');
        } else if (e.key === 'ArrowRight') {
          console.log('right');
        }
      },
      {
        capture: true, // this disables arrow key scrolling in modern Chrome
        passive: false, // this is optional, my code works without it
      }
    );
  }
}
