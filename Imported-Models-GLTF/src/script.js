import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import * as cannon from 'cannon-es'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

const gui = new GUI()

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#444444',
        metalness: 0,
        roughness: 0.5,
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
floor.material.side = THREE.DoubleSide;
scene.add(floor)

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 3.14)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

//  Sizes
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

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-0.71, 1.41, 0.78)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true

//  Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//GLTF Loading
const GLTFLoaderr = new GLTFLoader();

//Load ping pong Table
let i = 0
GLTFLoaderr.load('/models/PP_Table/scene.gltf', function (gltf){
    const model = gltf.scene;
    model.scale.set(4, 4, 4)
    model.position.y -= 0.01;
    model.traverse(function (node) {
          
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.material.wireframe = true;
            console.log('hello', i++)
        }
    })
  
    scene.add(model);
})

//
const hit_sound = new Audio("/sounds/ping_pong.mp3");

const Pong_Ball_colide = (Collision) => {
    let strength = Math.max(Collision.contact.getImpactVelocityAlongNormal(), 0);

    hit_sound.volume = Math.min(strength, 1);
    hit_sound.currentTime = 0;
    hit_sound.play();
}

const hit__sound = new Audio("/sounds/hit.mp3");
const Hit__ = (Collision) => {
    let strength = Math.max(Collision.contact.getImpactVelocityAlongNormal(), 0);

    hit__sound.volume = Math.min(strength, 1);
    hit__sound.currentTime = 0;
    hit__sound.play();
}

const TextureLoader = new THREE.TextureLoader();
const Texture = TextureLoader.load("/textures/Models/ball.jpeg");

let Objects  = []

const STDGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const STDMaterial = new THREE.MeshStandardMaterial;
STDMaterial.metalness = 0.1;
STDMaterial.roughness = 0.1;
STDMaterial.map       = Texture;

const sphereShape = new cannon.Sphere(0.1);

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


PhysicWorld.addContactMaterial(ContactMaterial)
PhysicWorld.addContactMaterial(BallContactMaterial)

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
    let y = 12
    let z = (Math.random() - 0.5) * 10
    createSphere(new THREE.Vector3(x, y, z))
}

BallCreator.reset = () => {
    for (const object of Objects){
        object.sphereBody.removeEventListener('collide', Pong_Ball_colide);
        PhysicWorld.removeBody(object.sphereBody);
        
        scene.remove(object.sphere);
    }
    Objects.splice(0, Objects.length)

    for (const object of Boxes){
        object.BoxBody.removeEventListener('collide', Hit__)
        PhysicWorld.removeBody(object.BoxBody);
        
        scene.remove(object.Box);
    }
    Boxes.splice(0, Boxes.length)
}

gui.add(BallCreator, 'createBall')
gui.add(BallCreator, 'reset')
//
//




//  Animate
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime


    //
    // update physic world
    PhysicWorld.step(1/60, deltaTime, 3)
        
    for (const object of Objects){
        object.sphere.position.copy(object.sphereBody.position);
        object.sphere.quaternion.copy(object.sphereBody.quaternion);

    }

    floor.position.copy(planeBody.position);
    //

    // Update controls
    controls.update()

    // console.log(camera.position);

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()