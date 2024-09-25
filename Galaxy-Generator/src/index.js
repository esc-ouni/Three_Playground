import * as THREE from 'three';

import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

import * as gui from 'lil-gui';


const TextureLoader = new THREE.TextureLoader();


const ligui = new gui.GUI({width:400}); 

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

camera.position.set(12, 12, 21);

const controls = new OrbitControls(camera, canvas);
controls.update()

material.metalness = 0.582;
material.roughness = 0;
ligui.add(material, 'roughness', 0, 1)
ligui.add(material, 'metalness', 0, 1)

// scene.add(ground, sphere, donut, plane);

const parameters = {}
parameters.count       = 50000;
parameters.size        = 0.5;
parameters.radius      = 13;
parameters.branches    = 5;
parameters.spin        = 1;
parameters.randomness  = 0.2;

//particles

const star_texture = TextureLoader.load("../static/Stars/star_06.png");

let particles = null;
let Paricle_Material = null;
let Paricle_Geometry = null;

const GenerateGalaxy = () => {

    if (particles !== null){
        Paricle_Geometry.dispose();
        Paricle_Material.dispose();
        scene.remove(particles);
    }

    Paricle_Geometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(parameters.count * 3);
    const colors    = new Float32Array(parameters.count * 3);
    
    for (let i = 0; i < parameters.count*3 ; i++){

        const radius     = parameters.radius * Math.random();
        let AngleBranche = 2 * Math.PI * ((i % parameters.branches) / parameters.branches);
        let SpinAngle    = parameters.spin * radius;

        const RandomX = (Math.random() - 0.5) * parameters.randomness * radius;
        const RandomY = (Math.random() - 0.5) * parameters.randomness * radius;
        const RandomZ = (Math.random() - 0.5) * parameters.randomness * radius;

        const i3 = i * 3;

        positions[i3 + 0] = Math.cos(AngleBranche + SpinAngle) * radius + RandomX;
        positions[i3 + 1] = RandomY;
        positions[i3 + 2] = Math.sin(AngleBranche + SpinAngle) * radius + RandomZ;

        colors[i] = Math.random();
    
    }
    
    Paricle_Geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    Paricle_Geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    Paricle_Material = new THREE.PointsMaterial();
    Paricle_Material.size = parameters.size;
    Paricle_Material.sizeAttenuation = true;
    Paricle_Material.color = new THREE.Color('#4168E1');
    Paricle_Material.map = star_texture;
    Paricle_Material.vertexColors = true;
    
    //remove back-ground
    Paricle_Material.transparent = true;
    Paricle_Material.alphaMap = star_texture;
    Paricle_Material.alphaTest = 0.001;
    Paricle_Material.blending = THREE.AdditiveBlending;
    Paricle_Material.depthWrite = false;
    //remove back-ground
    
    particles = new THREE.Points(Paricle_Geometry, Paricle_Material);
    
    scene.add(particles)
} 

GenerateGalaxy();

ligui.add(parameters, 'count', 500, 50000).onChange(GenerateGalaxy);
ligui.add(parameters, 'size', 0.09, 1).onChange(GenerateGalaxy);
ligui.add(parameters, 'radius', 3, 15).onChange(GenerateGalaxy);
ligui.add(parameters, 'branches', 3, 10).step(1).onChange(GenerateGalaxy);
ligui.add(parameters, 'spin', 1, 5).onChange(GenerateGalaxy);


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

    particles.rotation.y += 0.1 * c;

    controls.update();

    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
    requestAnimationFrame(Animate)
}

Animate();
