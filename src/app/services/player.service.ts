import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  public standStillEmitter = new Subject<string>();
  public idleEmitter = new Subject<string>();
  public waveEmitter = new Subject<string>();
  public cheerEmitter = new Subject<string>();
  public walkUpEmitter = new Subject<string>();
  public walkLeftEmitter = new Subject<string>();
  public walkRightEmitter = new Subject<string>();
  public walkDownEmitter = new Subject<string>();
  public walkTopRightEmitter = new Subject<string>();
  public walkTopLeftEmitter = new Subject<string>();
  public walkBottomLeftEmitter = new Subject<string>();
  public walkBottomRightEmitter = new Subject<string>();

  private upKeyDown: boolean = false;
  private downKeyDown: boolean = false;
  private leftKeyDown: boolean = false;
  private rightKeyDown: boolean = false;

  public listenForDownKeyEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.upKeyDown = true;
    } else if (event.key === 'ArrowDown') {
      this.downKeyDown = true;
    } else if (event.key === 'ArrowLeft') {
      this.leftKeyDown = true;
    } else if (event.key === 'ArrowRight') {
      this.rightKeyDown = true;
    }
    this.handleAnimation();
  }

  public listenForKeyUpEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.upKeyDown = false;
      this.standStill();
    } else if (event.key === 'ArrowDown') {
      this.downKeyDown = false;
      this.standStill();
    } else if (event.key === 'ArrowLeft') {
      this.leftKeyDown = false;
      this.standStill();
    } else if (event.key === 'ArrowRight') {
      this.rightKeyDown = false;
      this.standStill();
    }
  }

  private handleAnimation() {
    if (
      this.upKeyDown &&
      !this.downKeyDown &&
      !this.leftKeyDown &&
      !this.rightKeyDown
    ) {
      this.walkUp();
    }

    if (
      this.downKeyDown &&
      !this.upKeyDown &&
      !this.leftKeyDown &&
      !this.rightKeyDown
    ) {
      this.walkDown();
    }

    if (
      this.leftKeyDown &&
      !this.upKeyDown &&
      !this.downKeyDown &&
      !this.rightKeyDown
    ) {
      this.walkLeft();
    }

    if (
      this.rightKeyDown &&
      !this.upKeyDown &&
      !this.downKeyDown &&
      !this.leftKeyDown
    ) {
      this.walkRight();
    }

    if (
      this.rightKeyDown &&
      this.upKeyDown &&
      !this.downKeyDown &&
      !this.leftKeyDown
    ) {
      this.walkTopRight();
    }

    if (
      this.leftKeyDown &&
      this.upKeyDown &&
      !this.downKeyDown &&
      !this.rightKeyDown
    ) {
      this.walkTopLeft();
    }

    if (
      this.leftKeyDown &&
      this.downKeyDown &&
      !this.upKeyDown &&
      !this.rightKeyDown
    ) {
      this.walkBottomLeft();
    }

    if (
      this.rightKeyDown &&
      this.downKeyDown &&
      !this.upKeyDown &&
      !this.leftKeyDown
    ) {
      this.walkBottomRight();
    }
  }

  public walkUp() {
    this.walkUpEmitter.next('walk');
  }

  public walkLeft() {
    this.walkLeftEmitter.next('walk');
  }

  public walkRight() {
    this.walkRightEmitter.next('walk');
  }

  public walkTopRight() {
    this.walkTopRightEmitter.next('walk');
  }

  public walkTopLeft() {
    this.walkTopLeftEmitter.next('walk');
  }

  public walkBottomLeft() {
    this.walkBottomLeftEmitter.next('walk');
  }

  public walkBottomRight() {
    this.walkBottomRightEmitter.next('walk');
  }

  public walkDown() {
    this.walkDownEmitter.next('walk');
  }

  public standStill() {
    this.standStillEmitter.next('standStill');
  }

  public idle() {
    this.idleEmitter.next('idle');
  }

  public wave() {
    this.waveEmitter.next('wave');
  }

  public cheer() {
    this.cheerEmitter.next('cheer');
  }
}
