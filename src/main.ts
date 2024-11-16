import { WebGLRenderer } from 'three';
import { createPerspectiveCamera, createSceneBase } from './objects';
import { handleWindowResize } from './event-handlers';

const app = document.getElementById('app')!;
const renderer = new WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

app.append(renderer.domElement);

const scene = createSceneBase();
const camera = createPerspectiveCamera();

handleWindowResize(camera, renderer);

scene.add(camera);

const animate = () => {
  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);
