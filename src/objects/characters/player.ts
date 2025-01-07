import { Vector3 } from 'three';

import { objMtlLoader } from '../../loaders';
import { cameraSettings } from '../../settings';

export const createPlayer = async (position = new Vector3(0, 1)) => {
  const group = await objMtlLoader('models/characters/PlayerBase.obj');

  group.position.x = position.x;
  group.position.y = position.y;
  group.position.z = cameraSettings.positionZ;

  return group;
};
