import { WebGLRenderer } from 'three';

import './style.css';

import { createPerspectiveCamera, createSceneBase } from './objects';
import { handleWindowResizeEvents } from './event-handlers';
import { keyboardController, MouseController } from './controllers';

const app = document.getElementById('app')!;
const renderer = new WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

app.append(renderer.domElement);

const scene = createSceneBase();
const camera = createPerspectiveCamera();
const pointerControls = new MouseController(camera, renderer.domElement);

handleWindowResizeEvents(camera, renderer);

scene.add(camera, pointerControls.object);

const animate = () => {
  if (pointerControls.isLocked) {
    pointerControls.handleKeyPress(keyboardController);
  }

  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);
