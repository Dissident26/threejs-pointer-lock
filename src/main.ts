import { WebGLRenderer } from 'three';

import './style.css';

import { createPerspectiveCamera, createSceneBase } from './objects';
import { handleWindowResize } from './event-handlers';
import { MouseController } from './controllers';

const app = document.getElementById('app')!;
const renderer = new WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

app.append(renderer.domElement);

const scene = createSceneBase();
const camera = createPerspectiveCamera();
const controls = new MouseController(camera, renderer.domElement);

handleWindowResize(camera, renderer);

scene.add(camera, controls.object);

const animate = () => {
  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);
