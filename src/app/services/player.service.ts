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
  public walkEmitter = new Subject<string>();

  public walk() {
    this.walkEmitter.next('walk');
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
