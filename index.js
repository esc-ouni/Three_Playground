import * as THREE from 'three';

import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import * as gui from 'lil-gui';

const ligui = new gui.GUI(); 

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth/ window.innerHeight, 0.0001, 1000);

const canvas = document.getElementById('Renderer');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

const material  = new THREE.MeshStandardMaterial()
material.side   = THREE.DoubleSide

const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 50, 50), material);
const donut  = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.5, 16, 100 ), material);
const plane  = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), material);

const ground = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), material);

ground.rotation.x = Math.PI / 2;
ground.position.y -= 2.2;

donut.position.x += 5;
plane.position.x -= 5;

const axes_helper = new THREE.AxesHelper(15);

scene.add(axes_helper)


camera.position.set(12, 8, 21);

const controls = new OrbitControls(camera, canvas);
controls.update()

material.metalness = 0.582;
material.roughness = 0;
ligui.add(material, 'roughness', 0, 1)
ligui.add(material, 'metalness', 0, 1)

//light
const light = new THREE.SpotLight('white', 250);
light.position.x = 3.24;
light.position.y = 10;
light.position.z = 6.68;
scene.add(light);
ligui.add(light.position, 'x', 0, 10)
ligui.add(light.position, 'y', 0, 10)
ligui.add(light.position, 'z', 0, 10)
ligui.add(light, 'intensity', 0, 400)

const spotLight_Helper = new THREE.SpotLightHelper(light);
// scene.add(spotLight_Helper);

//light

//shadow

light.castShadow = true;

light.shadow.mapSize.width = 1024 * 4;
light.shadow.mapSize.height = 1024 * 4;

renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled = true;

sphere.castShadow   = true;
donut.castShadow    = true;
plane.castShadow    = true;

ground.receiveShadow = true;

//shadow

scene.add(ground, sphere, donut, plane);



const clock = new THREE.Clock();

function Animate() {
    const c = clock.getDelta();
    // sphere.rotation.x += 0.1 * c;
    plane.rotation.x  += 0.1 * c;
    donut.rotation.x  += 0.1 * c;
    
    // sphere.rotation.y -= 0.15 * c;
    plane.rotation.y  -= 0.15 * c;
    donut.rotation.y  -= 0.15 * c;

    const elapsed = clock.getElapsedTime()
    sphere.position.x = 1.5 * Math.cos(elapsed);
    sphere.position.z = 1.5 * Math.sin(elapsed);
    sphere.position.y = Math.abs(3 * Math.sin(elapsed));


    controls.update();

    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    spotLight_Helper.update();

    renderer.render(scene, camera);
    requestAnimationFrame(Animate)
}

Animate();
