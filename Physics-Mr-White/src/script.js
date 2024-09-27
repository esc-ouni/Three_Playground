import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import cannon, { World } from 'cannon'

console.time('label');
let k = 0;
/**
 * Debug
 */
const gui = new GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/0/px.png',
    '/textures/environmentMaps/0/nx.png',
    '/textures/environmentMaps/0/py.png',
    '/textures/environmentMaps/0/ny.png',
    '/textures/environmentMaps/0/pz.png',
    '/textures/environmentMaps/0/nz.png'
])

/**
 * Test sphere
 */

// Add Sound
const hit_sound = new Audio("/sounds/ping_pong.mp3");

const Pong_Ball_colide = (Collision) => {
    // let strength = Collision.contact.getImpactVelocityAlongNormal() / 8;
    let strength = Math.random();
    console.log((strength/ 8));
    // hit_sound.volume = strength;
    hit_sound.currentTime = 0;
    hit_sound.play();
}

const hit__sound = new Audio("/sounds/hit.mp3");
const Hit__ = (Collision) => {
    let strength = Collision.contact.getImpactVelocityAlongNormal() / 8;
    console.log(strength/ 8);
    // hit__sound.volume = strength;
    // hit__sound.currentTime = 0;
    // hit__sound.play();
}
//

const TextureLoader = new THREE.TextureLoader();
const Texture = TextureLoader.load("/textures/Models/ball.jpeg");
const Texture2 = TextureLoader.load("/textures/Models/kk.jpeg");

let Objects  = []

const STDGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const STDMaterial = new THREE.MeshStandardMaterial;
STDMaterial.metalness = 0.1;
STDMaterial.roughness = 0.1;
STDMaterial.map       = Texture;

const sphereShape = new cannon.Sphere(0.5);

const createSphere = (position) => {
    const sphere = new THREE.Mesh(
        STDGeometry,
        STDMaterial)
        sphere.castShadow = true
        sphere.position.copy(position);
        scene.add(sphere)
        
        const sphereBody  = new cannon.Body({
            mass: 1,
            shape: sphereShape,
            material: plasticMaterial
        });
    sphereBody.addEventListener('collide', Pong_Ball_colide);
    sphereBody.position.copy(sphere.position);
    PhysicWorld.addBody(sphereBody);
    Objects.push({sphere, sphereBody})
}


let Boxes  = []

const STDBGeometry = new THREE.BoxGeometry(1, 1);
const STDBMaterial = new THREE.MeshStandardMaterial;
STDBMaterial.metalness   = 0.5;
STDBMaterial.roughness   = 0.7;


const createBox = (width , height, depth, position) => {
    const Box = new THREE.Mesh(
        STDBGeometry,
        STDBMaterial)
        Box.castShadow = true
        Box.position.copy(position);
        Box.scale.set(width, height, depth);
        scene.add(Box)
        
    let BoxShape = new cannon.Box(new cannon.Vec3(width * 0.5, height * 0.5, depth * 0.5));
    const BoxBody  = new cannon.Body({
        mass: 15,
        shape: BoxShape,
        material: metalMaterial
    });
    
    BoxBody.addEventListener('collide', Hit__);
    BoxBody.position.copy(Box.position);
    PhysicWorld.addBody(BoxBody);
    Boxes.push({Box, BoxBody})
}

// gui.add(sphere.material, 'metalness', 0, 1);
// gui.add(sphere.material, 'roughness', 0, 1);
// gui.add(sphere.position, 'y', 0, 5000);

/**
 * Floor
 */
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 15),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 2.1)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far    = 100000
directionalLight.shadow.camera.near   = 0.01
directionalLight.shadow.camera.left   = - 7
directionalLight.shadow.camera.top    = 7
directionalLight.shadow.camera.right  = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-12.22, 10.86, -9.86)

scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//Cannon.js

//Materials
// console.log(cannon);
const PhysicWorld = new cannon.World();

//Allow objects sleep => icrease performance
PhysicWorld.allowSleep = true; 
//Collision detction better than Naive
PhysicWorld.broadphase = new cannon.SAPBroadphase(PhysicWorld);


PhysicWorld.gravity.set(0, - 8.92, 0);

const concreteMaterial = new cannon.Material('concrete');
const plasticMaterial  = new cannon.Material('plastic');
const metalMaterial  = new cannon.Material('metal');

const ContactMaterial = new cannon.ContactMaterial(
    concreteMaterial,
    plasticMaterial,
    {
        friction: 0.4,    // Increased for more realistic grip
        restitution: 0.5, // Decreased for less bounce
    }
);

const BallContactMaterial = new cannon.ContactMaterial(
    plasticMaterial,
    plasticMaterial,
    {
        friction: 0.2,    // Low friction for smooth surfaces
        restitution: 0.9, // High restitution for bounciness
    }
);

const MetalContactMaterial = new cannon.ContactMaterial(
    plasticMaterial,
    metalMaterial,
    {
        friction: 0.4,    // Moderate friction
        restitution: 0.3, // Moderate restitution
    }
);

const MetalContactMaterial2 = new cannon.ContactMaterial(
    concreteMaterial,
    metalMaterial,
    {
        friction: 0.6,    // Moderate to high friction
        restitution: 0.2, // Low restitution
    }
);

const MetalContactMaterial3 = new cannon.ContactMaterial(
    metalMaterial,
    metalMaterial,
    {
        friction: 0.5,    // Moderate friction
        restitution: 0.1, // Low restitution
    }
);

PhysicWorld.addContactMaterial(ContactMaterial)
PhysicWorld.addContactMaterial(BallContactMaterial)
PhysicWorld.addContactMaterial(MetalContactMaterial)
PhysicWorld.addContactMaterial(MetalContactMaterial2)
PhysicWorld.addContactMaterial(MetalContactMaterial3)

// sphereBody.applyForce(new cannon.Vec3(200,0, 0), sphereBody.position) // world outside force (wind, gravity, ...) 
// sphereBody.applyLocalForce(new cannon.Vec3(200, 0, 0), sphereBody.position) // like engine mounted on the body


//plane
const planeShape = new cannon.Plane();
const planeBody  = new cannon.Body({
    mass: 0,
    position: new cannon.Vec3().copy(floor.position),
    shape: planeShape,
    material:concreteMaterial
})
planeBody.quaternion.setFromAxisAngle(
    new cannon.Vec3(-1, 0, 0),
    Math.PI * 0.5
)
PhysicWorld.addBody(planeBody);

//


//To Add it To Dat Gui It has to be inside of an Object
const BallCreator = {}
BallCreator.createBall = () => {
    let x = (Math.random() - 0.5) * 10
    let y = (Math.random() + 0.05) * 10
    let z = (Math.random() - 0.5) * 10
    createSphere(new THREE.Vector3(x, y, z))
}

const BoxCreator = {}
BoxCreator.createBox = () => {
    let x = (Math.random() - 0.5) * 10
    let y = (Math.random() + 0.05) * 10
    let z = (Math.random() - 0.5) * 10
    createBox(Math.random()*2, Math.random()*2, Math.random()*2, new THREE.Vector3(x, y, z))
}


BoxCreator.reset = () => {
    console.log('Triggered');
    for (const object of Objects){
        object.sphereBody.removeEventListener('collide', Pong_Ball_colide);
        PhysicWorld.removeBody(object.sphereBody);
        
        scene.remove(object.sphere);
    }
    
    for (const object of Boxes){
        object.BoxBody.removeEventListener('collide', Hit__)
        PhysicWorld.removeBody(object.BoxBody);

        scene.remove(object.Box);
    }
}


// for (let i = 0; i < 25; i++){
//     BallCreator.createBall();
// }


// for (let i = 0; i < 25; i++){
//     BoxCreator.createBox();
// }

gui.add(BallCreator, 'createBall')
gui.add(BoxCreator, 'createBox')
gui.add(BoxCreator, 'reset')

//


/**
 * Animate
 */
const clock = new THREE.Clock()

let Dx, oelapsedTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    Dx = elapsedTime - oelapsedTime
    oelapsedTime = elapsedTime

    
    // update physic world
    PhysicWorld.step(1/60, Dx, 3)
    
    for (const object of Objects){
        object.sphere.position.copy(object.sphereBody.position);
        object.sphere.quaternion.copy(object.sphereBody.quaternion);

        // if (object.sphereBody.col)
    }

    for (const object of Boxes){
        object.Box.position.copy(object.BoxBody.position);
        object.Box.quaternion.copy(object.BoxBody.quaternion);
    }

    floor.position.copy(planeBody.position);
    
    // Update controls
    controls.update()
    
    // Render
    renderer.render(scene, camera)
    // Call tick again on the next frame
    if (!k){
        console.timeEnd('label');k=42;
    }
    window.requestAnimationFrame(tick)
}

tick()
