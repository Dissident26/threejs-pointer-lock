import { PerspectiveCamera, Renderer } from 'three';

export const handleWindowResizeEvents = (camera: PerspectiveCamera, renderer: Renderer) => {
  window.onresize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  };
};
