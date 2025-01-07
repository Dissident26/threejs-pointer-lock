import { WebGLRenderer } from 'three';

import './style.css';

import { createPerspectiveCamera, createPlayer, createSceneBase } from './objects';
import { handleWindowResizeEvents, WebSocketEventHandler } from './event-handlers';
import { keyboardController, MouseController } from './controllers';
import { socket } from './api';

const app = document.getElementById('app')!;
const renderer = new WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

app.append(renderer.domElement);

const scene = createSceneBase();
const camera = createPerspectiveCamera();
const pointerControls = new MouseController(camera, renderer.domElement);

handleWindowResizeEvents(camera, renderer);

const player = await createPlayer();

scene.add(camera, pointerControls.object, player);

const wsHandler = new WebSocketEventHandler(scene, socket);

socket.onAny(wsHandler.handleWebSocketEvents);

const animate = () => {
  if (pointerControls.isLocked) {
    pointerControls.handleKeyPress(keyboardController);
  }

  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);
