import { Quaternion as CQuaternion, Shape, Vec3 } from 'cannon-es';
import { Object3D } from 'three';
export type BoxParameters = {
    x: number;
    y: number;
    z: number;
};
export type CylinderParameters = {
    radiusTop: number;
    radiusBottom: number;
    height: number;
    segments: number;
};
export type SphereParameters = {
    radius: number;
};
export type ConvexPolyhedronParameters = {
    vertices: Float32Array;
    faces: number[][];
};
export type TrimeshParameters = {
    vertices: Float32Array;
    indices: Uint32Array;
};
type ShapeTypeToShapeParameters = {
    Box: BoxParameters;
    Cylinder: CylinderParameters;
    Sphere: SphereParameters;
    ConvexPolyhedron: ConvexPolyhedronParameters;
    Trimesh: TrimeshParameters;
};
export declare enum ShapeType {
    BOX = "Box",
    CYLINDER = "Cylinder",
    SPHERE = "Sphere",
    HULL = "ConvexPolyhedron",
    MESH = "Trimesh"
}
export interface ShapeOptions {
    type?: ShapeType;
    cylinderAxis?: 'x' | 'y' | 'z';
    sphereRadius?: number;
}
export interface ShapeParameters<T extends ShapeType = ShapeType> {
    type: T;
    params: ShapeTypeToShapeParameters[T];
    offset?: Vec3;
    orientation?: CQuaternion;
}
export interface ShapeResult<T extends Shape = Shape> {
    shape: T;
    offset?: Vec3;
    orientation?: CQuaternion;
}
/**
 * Given a THREE.Object3D instance, creates parameters for a CANNON shape.
 */
export declare const getShapeParameters: (object: Object3D, options?: ShapeOptions) => ShapeParameters | null;
/**
 * Given a THREE.Object3D instance, creates a corresponding CANNON shape.
 */
export declare const threeToCannon: (object: Object3D, options?: ShapeOptions) => ShapeResult | null;
export {};
