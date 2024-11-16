import { WebGLRenderer } from 'three';

// import { handleWindowResize } from './event-handlers';

const app = document.getElementById('app')!;
const renderer = new WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

app.append(renderer.domElement);

// handleWindowResize(camera, renderer);
