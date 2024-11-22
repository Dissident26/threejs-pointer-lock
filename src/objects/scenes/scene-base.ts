import { Color, Fog, HemisphereLight, Scene } from 'three';
import { createFloor } from './floor';

export const createSceneBase = () => {
  const scene = new Scene();
  //put everything  to separate files
  scene.background = new Color(0xffffff);
  scene.fog = new Fog(0xffffff, 0, 750);

  const light = new HemisphereLight(0xeeeeff, 0x777788, 2.5);
  light.position.set(0.5, 1, 0.75);

  const floor = createFloor();

  scene.add(light, floor);

  return scene;
};
