import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export const handlePointerLockEvents = (controls: PointerLockControls) => {
  const menuElement = document.getElementById('menu');

  menuElement?.addEventListener('click', () => {
    controls.lock();
  });

  controls.addEventListener('lock', () => {
    if (menuElement) {
      menuElement.style.display = 'none';
    }
  });

  controls.addEventListener('unlock', () => {
    if (menuElement) {
      menuElement.style.display = 'block';
    }
  });
};
