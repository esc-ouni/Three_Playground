import * as THREE from 'three';

import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

import * as gui from 'lil-gui';


const TextureLoader = new THREE.TextureLoader();


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

camera.position.set(12, 8, 21);

const controls = new OrbitControls(camera, canvas);
controls.update()

material.metalness = 0.582;
material.roughness = 0;
ligui.add(material, 'roughness', 0, 1)
ligui.add(material, 'metalness', 0, 1)


// star_04.png

// scene.add(ground, sphere, donut, plane);

//particles

const star_texture = TextureLoader.load("./Materials/static/textures/Stars/star_06.png");

console.log(star_texture);

const Paricle_Geometry = new THREE.BufferGeometry();
const count = 5000;

const positions = new Float32Array(count * 3);

for (let i = 0; i < count*3 ; i++)
    positions[i] = (Math.random() - 0.5) * 30;

Paricle_Geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const Paricle_Material = new THREE.PointsMaterial();
Paricle_Material.size = 0.14;
Paricle_Material.sizeAttenuation = true;
Paricle_Material.color = new THREE.Color('#ff43ff');
Paricle_Material.map = star_texture;

const particles = new THREE.Points(Paricle_Geometry, Paricle_Material);

scene.add(particles)


//particles




const clock = new THREE.Clock();

function Animate() {
    const c = clock.getDelta();
    sphere.rotation.x += 0.1 * c;
    plane.rotation.x  += 0.1 * c;
    donut.rotation.x  += 0.1 * c;
    
    sphere.rotation.y -= 0.15 * c;
    plane.rotation.y  -= 0.15 * c;
    donut.rotation.y  -= 0.15 * c;

    controls.update();

    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
    requestAnimationFrame(Animate)
}

Animate();
