import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  public behaviorEmitter = new Subject<string>();

  public changePlayerBehavior(newBehavior: string) {
    this.behaviorEmitter.next(newBehavior);
  }

  public walk() {
    this.behaviorEmitter.next('walk');
  }

  public standStill() {
    this.behaviorEmitter.next('standStill');
  }

  public idle() {
    this.behaviorEmitter.next('idle');
  }

  public wave() {
    this.behaviorEmitter.next('wave');
  }

  public cheer() {
    this.behaviorEmitter.next('cheer');
  }
}
