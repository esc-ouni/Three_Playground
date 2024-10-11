import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import * as cannon from 'cannon'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import CannonDebugger from 'cannon-es-debugger';


const gui = new GUI()

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
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
directionalLight.shadow.camera.far = 100
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
camera.position.set(-12.09, 8.19, 12.46)
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
GLTFLoaderr.load('/models/chinese_tea_table_4k.gltf/tabla.gltf', function (gltf){
    const model = gltf.scene;
    model.scale.set(1.12, 1.12, 1.2)
    model.position.y += 1.25;
    model.position.z = -1.5;
    // model.castShadow = true;
    // model.receiveShadow = true;

    model.traverse(function (node) {
          
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.material.wireframe = false;
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
            mass: 0.0027, // 2.7g per ping pong ball
            shape: sphereShape,
            material: plasticMaterial,
            linearDamping: 0.05, // Simulate air resistance
            angularDamping:0.05 // Simulate rotational resistance
        });
    sphereBody.addEventListener('collide', Pong_Ball_colide);
    sphereBody.position.copy(sphere.position);
    sphereBody.applyForce(new cannon.Vec3(0, -0.4, 2.4), sphereBody.position)
    console.log('Force Applied');
    PhysicWorld.addBody(sphereBody);
    Objects.push({sphere, sphereBody})
}

const PhysicWorld = new cannon.World();

//Allow objects sleep => icrease performance
PhysicWorld.allowSleep = true;

//Collision detction better than Naive
// PhysicWorld.broadphase = new cannon.SAPBroadphase(PhysicWorld);

PhysicWorld.gravity.set(0, - 8.92, 0);

const concreteMaterial = new cannon.Material('concrete');
const plasticMaterial  = new cannon.Material('plastic');
const TableMaterial    = new cannon.Material('table');
const NetMaterial      = new cannon.Material('net');

const ContactMaterial = new cannon.ContactMaterial(
    plasticMaterial,
    concreteMaterial,
    {
        friction: 0.7,   
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
    plasticMaterial,
    TableMaterial,
    {
        friction: 0.3,   
        restitution: 0.83
    }
);

const BallNetMaterial = new cannon.ContactMaterial(
    plasticMaterial,
    NetMaterial,
    {
        friction: 0.1,   
        restitution: 0.2
    }
);

PhysicWorld.addContactMaterial(ContactMaterial)
PhysicWorld.addContactMaterial(BallTableMaterial)
PhysicWorld.addContactMaterial(BallContactMaterial)
PhysicWorld.addContactMaterial(BallNetMaterial)

//plane
const planeShape = new cannon.Plane();
const planeBody  = new cannon.Body({
    mass: 0,
    position: new cannon.Vec3().copy(floor.position),
    shape: planeShape,
    material:concreteMaterial,
    linearDamping: 0.05, // Simulate air resistance
    angularDamping:0.05 // Simulate rotational resistance
})
planeBody.quaternion.setFromAxisAngle(
    new cannon.Vec3(-1, 0, 0),
    Math.PI * 0.5
)

planeBody.position.y = -0.137;


PhysicWorld.addBody(planeBody);
//

//To Add it To Dat Gui It has to be inside of an Object
const BallCreator = {}
BallCreator.createBall = () => {
    let x = (Math.random() - 0.5) * 3
    let y = 4.0387;
    let z = -8;
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
const geometry       = new THREE.BoxGeometry( 1, 1, 1 ); 
const material       = new THREE.MeshBasicMaterial( {color: 0xffffff} );
material.transparent = true; 
const Table          = new THREE.Mesh( geometry, material ); 
Table.scale.set(3.3, 0.1, 3.3)


Table.position.y = 3.0387;
Table.scale.x    = 6.15;
Table.scale.y    = 0.3;
Table.scale.z    = 14.8;

// scene.add(Table);

// add the table to Physic world 
const TableShape = new cannon.Box(new cannon.Vec3(Table.scale.x / 2, Table.scale.y / 2, Table.scale.z / 2));
const TableBody  = new cannon.Body({
    mass: 0,
    position: new cannon.Vec3().copy(Table.position),
    shape: TableShape,
    material:TableMaterial,
    quaternion:Table.quaternion,
    linearDamping: 0.05, // Simulate air resistance
    angularDamping:0.05 // Simulate rotational resistance
})
TableBody.position.x = Table.position.x;
TableBody.position.y = Table.position.y;
TableBody.position.z = Table.position.z;
PhysicWorld.addBody(TableBody);

// gui.add(TableBody.position, 'y', -5 , 5).step(0.0001)
// gui.add(TableBody.position, 'z', -5 , 5).step(0.0001)
// gui.add(TableBody.position, 'x', -5 , 5).step(0.0001)

// gui.add(Table.scale, 'x', 0.1, 10).step(0.1).name('Width');
// gui.add(Table.scale, 'y', 0.1, 10).step(0.1).name('Height');
// gui.add(Table.scale, 'z', 0.1, 20).step(0.1).name('Depth');

// scene.add(new THREE.AxesHelper(15))

//Net

const Net = new THREE.Mesh( geometry, material ); 
Net.position.x = 0;
Net.position.y = 3.42;
Net.position.z = 0.0371;
Net.scale.set(7.8, 0.8, 0.05)

// scene.add(Net);

const NetShape = new cannon.Box(new cannon.Vec3(Net.scale.x / 2, Net.scale.y / 2, Net.scale.z / 2));
const NetBody  = new cannon.Body({
    mass: 0,
    position: new cannon.Vec3().copy(Net.position),
    shape: NetShape,
    material:NetMaterial,
    quaternion:Net.quaternion,
    linearDamping: 0.05, // Simulate air resistance
    angularDamping:0.05 // Simulate rotational resistance
})
NetBody.position.x = Net.position.x;
NetBody.position.y = Net.position.y;
NetBody.position.z = Net.position.z;
PhysicWorld.addBody(NetBody);
//

//
// Initialize the debugger after setting up your scene and physics world
// const cannonDebugger = new CannonDebugger(scene, PhysicWorld, {
//     color: 0xff0000, // Optional: Color of the debug visuals
// });


// new cannon.Box()

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

    floor.position.copy(planeBody.position);
    floor.quaternion.copy(planeBody.quaternion);

    Table.position.copy(TableBody.position);
    Table.quaternion.copy(TableBody.quaternion);
    
    for (const object of Objects){
        // object.sphereBody.applyLocalForce(new cannon.Vec3(0, 0, 5), object.sphereBody.position)
        object.sphere.position.copy(object.sphereBody.position);
        object.sphere.quaternion.copy(object.sphereBody.quaternion);
    }
    
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