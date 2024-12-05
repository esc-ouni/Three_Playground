
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import gsap from 'gsap';

// Setting up basic Three.js scene
const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();

// Physics properties
const gravity = -9.8; // Gravity constant
const friction = 0.98; // Friction coefficient
const restitution = 0.8; // Restitution for bounciness

// Object to store physics properties of all game objects
const physicsObjects = [];

// Create a simple floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshStandardMaterial({ color: '#444444', metalness: 0, roughness: 1 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Add ball with custom physics properties
const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const ballMaterial = new THREE.MeshStandardMaterial({ color: '#ff0000' });
const ball = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ball);

// Add physics properties to the ball
physicsObjects.push({
    mesh: ball,
    velocity: new THREE.Vector3(2, 5, 0), // Initial velocity
    acceleration: new THREE.Vector3(0, gravity, 0), // Gravity applied
    mass: 1
});

// Lights
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 5, 10);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Physics update function
function updatePhysics(deltaTime) {
    for (const obj of physicsObjects) {
        // Update velocity
        obj.velocity.add(obj.acceleration.clone().multiplyScalar(deltaTime));
        
        // Apply friction
        obj.velocity.multiplyScalar(friction);

        // Update position
        obj.mesh.position.add(obj.velocity.clone().multiplyScalar(deltaTime));

        // Collision with the floor
        if (obj.mesh.position.y <= 0.5) {
            obj.mesh.position.y = 0.5; // Reset position
            obj.velocity.y *= -restitution; // Reverse and reduce velocity due to bounce
        }
    }
}

// Animation loop
const clock = new THREE.Clock();
function animate() {
    const deltaTime = clock.getDelta(); // Time elapsed since last frame

    // Update physics
    updatePhysics(deltaTime);

    // Update controls
    controls.update();

    // Render scene
    renderer.render(scene, camera);

    // Loop
    requestAnimationFrame(animate);
}

// Start animation
animate();
