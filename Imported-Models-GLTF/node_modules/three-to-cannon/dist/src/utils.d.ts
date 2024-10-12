import { BufferGeometry, Object3D, Vector3 } from 'three';
/**
* Returns a single geometry for the given object. If the object is compound,
* its geometries are automatically merged. Bake world scale into each
* geometry, because we can't easily apply that to the cannonjs shapes later.
*/
export declare function getGeometry(object: Object3D): BufferGeometry | null;
export declare function getVertices(geometry: BufferGeometry): Float32Array;
export declare function getComponent(v: Vector3, component: string): number;
