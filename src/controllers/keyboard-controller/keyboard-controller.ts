import { Key } from '../../settings';
import { handleKeyPressEvents } from '../../event-handlers';

export class KeyboardController {
  [Key.UP] = false;
  [Key.DOWN] = false;
  [Key.LEFT] = false;
  [Key.RIGHT] = false;

  constructor() {
    handleKeyPressEvents(this);
  }
}

export const keyboardController = new KeyboardController();
