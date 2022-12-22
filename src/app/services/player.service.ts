import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  public behaviorEmitter = new Subject<string>();

  public changePlayerBehavior(newBehavior: string) {
    this.behaviorEmitter.next(newBehavior);
  }
}
