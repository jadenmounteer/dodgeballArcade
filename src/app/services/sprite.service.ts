import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpriteService {
  constructor() {}

  public spritePositionToImagePosition(
    row: number,
    col: number,
    BORDER_WIDTH: number,
    SPACING_WIDTH: number,
    SPRITE_WIDTH: number,
    SPRITE_HEIGHT: number
  ) {
    return {
      x: BORDER_WIDTH + col * (SPACING_WIDTH + SPRITE_WIDTH),
      y: BORDER_WIDTH + row * (SPACING_WIDTH + SPRITE_HEIGHT),
    };
  }

  public animate(
    animationFrames: any,
    frameIndex: number,
    frame: any,
    context: any,
    canvas: any,
    image: any,
    SPRITE_WIDTH: number,
    SPRITE_HEIGHT: number
  ) {
    // once we hit the end of the cycle, start again
    if (frameIndex === animationFrames.length) {
      frameIndex = 0;
    }
    frame = animationFrames[frameIndex];
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(
      image,
      frame.x,
      frame.y,
      SPRITE_WIDTH,
      SPRITE_HEIGHT,
      0,
      0,
      SPRITE_WIDTH,
      SPRITE_HEIGHT
    );
    frameIndex += 1;
  }
}
