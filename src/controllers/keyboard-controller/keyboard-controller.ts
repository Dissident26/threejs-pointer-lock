import { Key } from '../../settings';
import { handleKeyPress } from '../../event-handlers';

export class KeyboardController {
  [Key.UP] = false;
  [Key.DOWN] = false;
  [Key.LEFT] = false;
  [Key.RIGHT] = false;

  constructor() {
    handleKeyPress(this);
  }
}

export const keyboardController = new KeyboardController();
