import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import * as cannon from 'cannon-es'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import CannonDebugger from 'cannon-es-debugger';


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
const ambientLight = new THREE.AmbientLight(0xffffff, 1.14)
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

// Other Options
// GLTFLoaderr.load('/models/PP_Table/scene.gltf', function (gltf){
// GLTFLoaderr.load('/models/table_v2/scene.gltf', function (gltf){
// model.scale.set(2, 2, 2)
// model.position.y -= 0.04;
        
//Load ping pong Table
GLTFLoaderr.load('/models/chinese_tea_table_4k.gltf/chinese_tea_table_4k.gltf', function (gltf){
    const model = gltf.scene;
    model.scale.set(4, 4, 4)
    model.position.y += 0.001;
    model.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            // node.material.wireframe = true;
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

        //add some imperfectness
        sphere.rotation.x += (Math.random() - 0.5)
        sphere.rotation.y += (Math.random() - 0.5)
        sphere.rotation.z += (Math.random() - 0.5)
        //

        scene.add(sphere)
        
        const sphereBody  = new cannon.Body({
            mass: 0.0027, // 2.7g per ping pong ball
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
const TableMaterial    = new cannon.Material('table');

const ContactMaterial = new cannon.ContactMaterial(
    concreteMaterial,
    plasticMaterial,
    {
        friction: 0.4,   
        restitution: 0.5
    }
);

const BallContactMaterial = new cannon.ContactMaterial(
    plasticMaterial,
    plasticMaterial,
    {
        friction: 0.2,   
        restitution: 0.9, 
    }
);

const BallTableMaterial = new cannon.ContactMaterial(
    TableMaterial,
    plasticMaterial,
    {
        friction: 0.3,   
        restitution: 0.83
    }
);

PhysicWorld.addContactMaterial(ContactMaterial)
PhysicWorld.addContactMaterial(BallTableMaterial)
PhysicWorld.addContactMaterial(BallContactMaterial)

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
    let x = (Math.random() - 0.5) * 3
    let y = 12
    let z = (Math.random() - 0.5) * 3
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


//Table Plane
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
material.transparent = true; 
const Table = new THREE.Mesh( geometry, material ); 
Table.position.y = 1.895;
Table.scale.set(3.3, 0.1, 3.3)

// scene.add(Table);

// add the table to Physic world 
const TableShape = new cannon.Box(new cannon.Vec3(3.3 / 2, 0.1, 3.3 / 2));
const TableBody  = new cannon.Body({
    mass: 0,
    position: new cannon.Vec3().copy(Table.position),
    shape: TableShape,
    material:TableMaterial,
    quaternion:Table.quaternion
})

// gui.add(TableBody.position, 'y', 0 , 3).step(0.001)
PhysicWorld.addBody(TableBody);
//

//
// Initialize the debugger after setting up your scene and physics world
// const cannonDebugger = new CannonDebugger(scene, PhysicWorld, {
//     color: 0xff0000, // Optional: Color of the debug visuals
// });


//  Animate
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    
    // update physic world
    PhysicWorld.step(1/60, deltaTime, 3)
    
    for (const object of Objects){
        object.sphere.position.copy(object.sphereBody.position);
        object.sphere.quaternion.copy(object.sphereBody.quaternion);
    }
    
    floor.position.copy(planeBody.position);
    floor.quaternion.copy(planeBody.quaternion);

    Table.position.copy(TableBody.position);
    Table.quaternion.copy(TableBody.quaternion);
    //
    
    // Update controls
    controls.update()
    
    // Update debugger
    // cannonDebugger.update();
    
    // console.log(camera.position);

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()