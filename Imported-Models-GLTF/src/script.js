import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import * as cannon from 'cannon'
import gsap from 'gsap'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import CannonDebugger from 'cannon-es-debugger';
import { threeToCannon, ShapeType } from 'three-to-cannon';
import * as BufferGeometryUtils  from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

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


// scene.add(floor)



const ambientLight = new THREE.AmbientLight(0xffffff, 1.14)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far    = 300
directionalLight.shadow.camera.left   = - 20
directionalLight.shadow.camera.top    = 20
directionalLight.shadow.camera.right  = 20
directionalLight.shadow.camera.bottom = - 20
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-15, 4, 0)
// camera.position.set(0, 5.81, 11.77)
// {x: -0.006796629480714592, y: 5.816349904903697, z: 11.774813465294566}
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//GLTF Loading

const GLTFLoaderr = new GLTFLoader(); 
GLTFLoaderr.load('/models/chinese_tea_table_4k.gltf/tabla_v2.gltf', function (gltf){
    const model = gltf.scene;
    model.scale.set(1.5, 1.5, 1.5)
    model.position.y += 1.25;
    model.position.z = -1.4;
    
    model.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.material.wireframe = false;
        }
    })
    scene.add(model);
})

//paddle
const geometries = []

let paddle = null;
let paddleAi = null;
let paddleBody = null;
let paddleBodyAi = null;
GLTFLoaderr.load('/models/chinese_tea_table_4k.gltf/paddle_test.gltf', function (gltf){
    const model = gltf.scene;
    paddle = model;
    model.scale.set(2.1, 2.1, 2.1)
    model.position.y = 4.0387;
    model.position.z = 10; //-8
    
    model.traverse(function (node) {          
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            // node.material.wireframe = true;
            
            geometries.push(node.geometry.clone());
        }
    })

    const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries, true);
    const mergedMesh = new THREE.Mesh(mergedGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    mergedMesh.scale.copy(model.scale);
    // scene.add(mergedMesh);

    
    paddle.rotation.x = 3.04;
    paddle.rotation.y = 3.19;
    paddle.rotation.z = 2.03;


    
    // gui.add(paddle.rotation, 'x', 0, 2 * Math.PI).step(0.005)
    // gui.add(paddle.rotation, 'y', 0, 2 * Math.PI).step(0.005)
    // gui.add(paddle.rotation, 'z', 0, 2 * Math.PI).step(0.005)
    
    paddleBody  = new cannon.Body({
        mass: 0,
        position: new cannon.Vec3().copy(paddle.position),
        shape: threeToCannon(mergedMesh,{type: ShapeType.HULL}).shape,
        material:PaddleMaterial,
        linearDamping: 0.05,
        angularDamping:0.05
    })
    
    paddleAi = paddle.clone();
    paddleAi.position.z = -10;

    paddleBodyAi  = new cannon.Body({
        mass: 0,
        position: new cannon.Vec3().copy(paddleAi.position),
        shape: threeToCannon(mergedMesh,{type: ShapeType.HULL}).shape,
        material:PaddleMaterial,
        linearDamping: 0.05,
        angularDamping:0.05
    })
    
    // paddleBodyAi = paddleBody.clone();

    PhysicWorld.addBody(paddleBody);

    paddleBodyAi.position.z = -10;
    PhysicWorld.addBody(paddleBodyAi);

    scene.add(paddle);
    scene.add(paddleAi);
})

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

let Objects  = [];

let ball = null;

const STDGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const STDMaterial = new THREE.MeshStandardMaterial;
STDMaterial.metalness = 0.1;
STDMaterial.roughness = 0.1;
STDMaterial.map       = Texture;

const sphereShape = new cannon.Sphere(0.1);

const createSphere = (position, px, py, pz) => {
    const sphere = new THREE.Mesh(
        STDGeometry,
        STDMaterial)
        sphere.castShadow = true
        sphere.position.copy(position);
        
        scene.add(sphere)
        
        const sphereBody  = new cannon.Body({
            mass: 0.0027,
            shape: sphereShape,
            material: plasticMaterial,
            linearDamping: 0.05,
            angularDamping:0.05
        });
        
        sphereBody.addEventListener('collide', (event) => {
            if (event.body === paddleBody) {
                    console.log('contacted!');
                    sphereBody.applyForce(new cannon.Vec3(0, 0.2, -4), sphereBody.position)
                }
            }
        );
    

        sphereBody.addEventListener('collide', Pong_Ball_colide);
        sphereBody.position.copy(sphere.position);
        // sphereBody.applyForce(new cannon.Vec3(px, py, pz), sphereBody.position)
        sphereBody.applyForce(new cannon.Vec3(0, -0.8, 2.2), sphereBody.position)
        PhysicWorld.addBody(sphereBody);
    ball = sphere;
    Objects.push({sphere, sphereBody})
}

const PhysicWorld = new cannon.World();

//Allow objects sleep => icrease performance
// PhysicWorld.allowSleep = true;

//Collision detction better than Naive
// PhysicWorld.broadphase = new cannon.SAPBroadphase(PhysicWorld);

PhysicWorld.gravity.set(0, - 8.92, 0);

const concreteMaterial = new cannon.Material('concrete');
const plasticMaterial  = new cannon.Material('plastic');
const PaddleMaterial   = new cannon.Material('paddle');
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
        restitution: 0.9
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

const PaddleBallContact = new cannon.ContactMaterial(
    plasticMaterial,
    PaddleMaterial,
    {
        friction: 0.1,   
        restitution: 0.9
    }
);

PhysicWorld.addContactMaterial(BallContactMaterial)
PhysicWorld.addContactMaterial(BallTableMaterial)
PhysicWorld.addContactMaterial(PaddleBallContact)
PhysicWorld.addContactMaterial(ContactMaterial)
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
const BallCreator = {
    px: 0,
    py: 0.5,
    pz: 2 ,
    cameraFixed: false 
}

BallCreator.reset = () => {
    for (const object of Objects){
        object.sphereBody.removeEventListener('collide', Pong_Ball_colide);
        PhysicWorld.removeBody(object.sphereBody);
        
        scene.remove(object.sphere);
    }
    Objects.splice(0, Objects.length)
}


BallCreator.createBall = () => {
    let x = (Math.random() - 0.5) * 4
    let y = 4.0387;
    let z = -8;
    
    createSphere(new THREE.Vector3(x, y, z), BallCreator.px, BallCreator.py, BallCreator.pz)
}
gui.add(BallCreator, 'px', -5, 5).step(0.1)
gui.add(BallCreator, 'py', -5, 5).step(0.1)
gui.add(BallCreator, 'pz', -5, 5).step(0.1)

gui.add(BallCreator, 'createBall')
gui.add(BallCreator, 'reset')
//

//Table Plane
const geometry       = new THREE.BoxGeometry( 1, 1, 1 ); 
const material       = new THREE.MeshBasicMaterial( {color: 0xffffff} );
material.transparent = true; 
const Table          = new THREE.Mesh( geometry, material ); 
Table.scale.set(3.3, 0.1, 3.3)

Table.position.y = 3.7;
Table.position.z = 0.48;

Table.scale.x    = 8.28;
Table.scale.y    = 0.3;
Table.scale.z    = 18.51;

// gui.add(Table.position, 'y', 3, 10).step(0.01)
// gui.add(Table.position, 'z', -10, 10).step(0.01)
// gui.add(Table.scale, 'x', 3, 20).step(0.01)
// gui.add(Table.scale, 'y', 0, 20).step(0.01)
// gui.add(Table.scale, 'z', 3, 20).step(0.01)

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

//Net
const Net = new THREE.Mesh( geometry, material ); 
Net.position.x = 0;
Net.position.y = 4.25;
Net.position.z = 0.53;
Net.scale.set(10.2, 0.93, 0.05)

gui.add(Net.position, 'y', 3, 10).step(0.01)
gui.add(Net.position, 'z', -10, 10).step(0.01)
gui.add(Net.scale, 'x', 3, 20).step(0.01)
gui.add(Net.scale, 'y', 0, 20).step(0.01)
gui.add(Net.scale, 'z', 3, 20).step(0.01)

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

const cannonDebugger = new CannonDebugger(scene, PhysicWorld, {
    color: 0xff0000, // Optional: Color of the debug visuals
});

//  Animate
const clock = new THREE.Clock()
let previousTime = 0

var rotationOffset = new cannon.Quaternion();
   rotationOffset.setFromEuler(-(Math.PI / 2), 0, 0);

let paddleQuat = new cannon.Quaternion();


//mouse event listener
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', function (info) {
    // console.log('Mouse Moved', (info.clientX/window.innerWidth)*2-1 , -((info.clientY/window.innerHeight)*2-1));
    mouse.x = (info.clientX/window.innerWidth)*2-1;
    mouse.y = -((info.clientY/window.innerHeight)*2-1);
})

//Raycaster
const Raycaster = new THREE.Raycaster();

// Create an ArrowHelper
// const arrowHelper = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -1, 0), 1, 0xff0000);
// scene.add(arrowHelper);

//enviroment map
// const rgbeLoader = new RGBELoader();
// rgbeLoader.load('/models/neon_photostudio_2k.hdr', (enviroment_map) => {
//     enviroment_map.mapping = THREE.EquirectangularReflectionMapping
//     scene.background  = enviroment_map;
//     scene.environment = enviroment_map;
// })
//

scene.add(new THREE.AxesHelper(15))

gui.add(BallCreator, 'cameraFixed');

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    
    // Synchronize the physics body with the paddle mesh
    if (paddleBody != null && paddle != null) {
        Raycaster.set(paddle.position, new THREE.Vector3(0, 0, -1));

        // arrowHelper.position.copy(paddle.position)
        // arrowHelper.setDirection(new THREE.Vector3(0, 0, -1))
        //raycaster
        // if (Objects.length){
            
        //     ppBalls = Objects.map(obj => obj.sphere)
        //     Intersects = Raycaster.intersectObjects(ppBalls);
            
        //     if (Intersects.length > 0){
        //         console.log(Intersects[0]);
        //     }
        // }
    

        paddleBody.position.copy(paddle.position);
        
        paddleQuat.copy(paddle.quaternion);
        
        paddleQuat = paddleQuat.mult(rotationOffset);
        
        paddleBody.quaternion.copy(paddleQuat);
        

        paddleBodyAi.position.copy(paddleAi.position);

        paddleBodyAi.quaternion.copy(paddleQuat);


    }

    // update physic world
    PhysicWorld.step(1/60, deltaTime, 3)

    floor.position.copy(planeBody.position);
    floor.quaternion.copy(planeBody.quaternion);

    // Table.position.copy(TableBody.position);
    Table.quaternion.copy(TableBody.quaternion);
    
    for (const object of Objects){
        object.sphere.position.copy(object.sphereBody.position);
        object.sphere.quaternion.copy(object.sphereBody.quaternion);
    }
    
    if (Objects.length && paddleAi){
        // paddleAi.position.copy(paddleBodyAi.position);
        // paddleAi.quaternion.copy(paddleBodyAi.quaternion);
        paddleAi.position.x = Objects[Objects.length - 1].sphere.position.x; 
        paddleAi.position.y = Objects[Objects.length - 1].sphere.position.y;
    }

    if (BallCreator.cameraFixed){
        camera.position.x = 0;
        camera.position.y = 5.8;
        camera.position.z = 12.8;

        // console.log(paddle.position.z);
        
        // console.log(camera.position.x, camera.position.y, camera.position.z);
        camera.position.x = 4 * mouse.x;
        camera.position.y = 5.8 + ( 1 * mouse.y);

        paddle.position.x = 4 * mouse.x;
        paddle.position.z = 11 - Math.abs((2 * mouse.x));
        paddle.position.y = 4.03 + (2 * mouse.y);

        if (paddle.position.x >0){
            gsap.to(paddle.rotation, {
                x: 2.81,
                y: 2.96,
                z: 2.81,
                duration: 0.095,
                ease: "power2.inOut",
            });
        }
        else{
            gsap.to(paddle.rotation, {
                x: 2.81,
                y: 6.28,
                z: 2.81,
                duration: 0.095,
                ease: "power2.inOut",
            });
        }
        // if (paddleAi.position.x >0){
        //     gsap.to(paddle.rotation, {
        //         x: 2.81,
        //         y: 6.28,
        //         z: 2.81,
        //         duration: 0.095,
        //         ease: "power2.inOut",
        //     });
        // }
        // else{
        //     gsap.to(paddle.rotation, {
        //         x: 2.81,
        //         y: 2.96,
        //         z: 2.81,
        //         duration: 0.095,
        //         ease: "power2.inOut",
        //     });
        // }    

    }
    
    // Update controls
    controls.update()
    
    // Update debugger
    cannonDebugger.update();

    //camera
    // console.log(camera.position);
    
    // Render
    renderer.render(scene, camera)

    // console.log(camera.position);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


// -0.0394104840668026 5.451454332183686

// 3.9495296465566594 5.224859320767735
// -4.253731684360619 5.80444415426392