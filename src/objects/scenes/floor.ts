import { PlaneGeometry, Float32BufferAttribute, MeshBasicMaterial, Mesh, SRGBColorSpace, Vector3, Color } from 'three';

export const createFloor = () => {
  const vertex = new Vector3();
  const color = new Color();

  const planeGeometry = new PlaneGeometry(2000, 2000, 100, 100);

  planeGeometry.rotateX(-Math.PI / 2);

  const { position: planePosition } = planeGeometry.attributes;

  for (let i = 0, l = planePosition.count; i < l; i++) {
    vertex.fromBufferAttribute(planePosition, i);

    vertex.x += Math.random() * 20 - 10;
    vertex.y += Math.random() * 2;
    vertex.z += Math.random() * 20 - 10;

    planePosition.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }

  const bufferGeometry = planeGeometry.toNonIndexed();

  const { position: bufferPosition } = bufferGeometry.attributes;

  const colorsFloor = [];
  for (let i = 0, l = bufferPosition.count; i < l; i++) {
    color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75, SRGBColorSpace);
    colorsFloor.push(color.r, color.g, color.b);
  }

  bufferGeometry.setAttribute('color', new Float32BufferAttribute(colorsFloor, 3));

  const floorMaterial = new MeshBasicMaterial({ vertexColors: true });

  return new Mesh(bufferGeometry, floorMaterial);
};
