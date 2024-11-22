import { Color, Fog, HemisphereLight, Mesh, MeshBasicMaterial, PlaneGeometry, Scene } from 'three';

export const createSceneBase = () => {
  const scene = new Scene();
  //put everything  to separate files
  scene.background = new Color(0xffffff);
  scene.fog = new Fog(0xffffff, 0, 750);

  const light = new HemisphereLight(0xeeeeff, 0x777788, 2.5);
  light.position.set(0.5, 1, 0.75);

  const floorGeometry = new PlaneGeometry(2000, 2000, 100, 100);
  const floorMaterial = new MeshBasicMaterial({ color: 'black' });
  const floor = new Mesh(floorGeometry, floorMaterial);

  floorGeometry.rotateX(-Math.PI / 2);

  scene.add(light, floor);

  return scene;
};
