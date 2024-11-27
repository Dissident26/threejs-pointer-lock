import { Camera, Vector3 } from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

import { handlePointerLockEvents } from '../../event-handlers';
import { cameraSettings, Key, playerSettings } from '../../settings';
import { KeyboardController } from '../keyboard-controller';

export class MouseController {
  controls: PointerLockControls;
  direction = new Vector3();

  constructor(camera: Camera, domElement?: HTMLElement) {
    const controls = new PointerLockControls(camera, domElement);

    controls.getObject().position.y = cameraSettings.positionZ;

    handlePointerLockEvents(controls);

    this.controls = controls;
  }

  /**
   * @param {number} distance - positive numbers - move right, negative - move left
   */
  public moveHorizontal(distance: number) {
    this.controls.moveRight(distance);
  }
  /**
   * @param {number} distance - positive numbers - move forward, negative - move backwards
   */
  public moveVertical(distance: number) {
    this.controls.moveForward(distance);
  }
  /**
   * Locks pointer
   */
  public lock() {
    this.controls.lock();
  }
  /**
   * Unlocks pointer
   */
  public unlock() {
    this.controls.unlock();
  }
  /**
   * @returns {boolean} - Returns "isLocked" state
   */
  public get isLocked() {
    return this.controls.isLocked;
  }
  /**
   * @returns {Camera} - Returns Camera object
   */
  public get object() {
    return this.controls.getObject();
  }

  public handleKeyPress(keyboardController: KeyboardController) {
    const speed = playerSettings.baseSpeed;

    if (keyboardController[Key.UP]) {
      this.moveVertical(speed);
    }
    if (keyboardController[Key.DOWN]) {
      this.moveVertical(-speed);
    }
    if (keyboardController[Key.LEFT]) {
      this.moveHorizontal(-speed);
    }
    if (keyboardController[Key.RIGHT]) {
      this.moveHorizontal(speed);
    }
  }
}
