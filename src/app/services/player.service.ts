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

  public walkUp() {
    this.walkUpEmitter.next('walk');
  }

  public walkLeft() {
    this.walkLeftEmitter.next('walk');
  }

  public walkRight() {
    this.walkRightEmitter.next('walk');
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
