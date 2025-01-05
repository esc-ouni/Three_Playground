import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import gsap from 'gsap'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js'

// import stats from 'stats.js'


// Physics properties (perfect values)
const gravity     = -9.8;
const friction    = 0.25;
const restitution = 0.89;



// const stat = new stats()
// stat.showPanel(0)
// document.body.appendChild(stat.dom)

const loadingScreen = document.getElementById('loading-screen');

const loadingManager = new THREE.LoadingManager();

loadingManager.onLoad = function () {
    gsap.to(loadingScreen, { opacity: 0, duration: 1, onComplete: () => {
        loadingScreen.style.display = 'none';
    }});
};

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

//event listeners
const handleResize = () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
};

window.addEventListener('resize', handleResize)

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-22, 6, 0)
scene.add(camera)

const topControls = new OrbitControls(camera, canvas)
topControls.enableDamping = true

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const GLTFLoaderr = new GLTFLoader(loadingManager); 
GLTFLoaderr.load('/models/chinese_tea_table_4k.gltf/tabla_v2.gltf', function (gltf){
    const model = gltf.scene;
    model.scale.set(1.5, 1.5, 1.5)
    model.position.y += 1.7;
    model.position.z = -1.94;
    
    model.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.material.wireframe = false;
        }
    })
    scene.add(model);
})

let paddle = null;
let paddleAi = null;

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
        }
    })

    paddleAi = paddle.clone();
    paddleAi.position.z = -10;
    paddleAi.rotation.set(0, 0, 0);

    scene.add(paddle);
    scene.add(paddleAi);
})

const hit_sound = new Audio("/sounds/ping_pong.mp3");

const Pong_Ball_colide = (impact) => {
    hit_sound.volume = Math.min(impact, 1);
    hit_sound.currentTime = 0;
    hit_sound.play();
}

const TextureLoader = new THREE.TextureLoader(loadingManager);
const Texture = TextureLoader.load("/textures/Models/ball.jpeg");

let Objects  = [];

const STDGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const STDMaterial = new THREE.MeshStandardMaterial;
STDMaterial.metalness = 0.1;
STDMaterial.roughness = 0.1;
STDMaterial.map       = Texture;


function applyForce(obj, Velocity){
    obj.velocity.copy(Velocity)
}

const createSphere = (position, px, py, pz) => {
    const sphere = new THREE.Mesh(
        STDGeometry,
        STDMaterial)

        sphere.castShadow = true
        sphere.position.copy(position);
        
        scene.add(sphere)
        
        BallCreator.reset()
        Objects.push({
            sphere: sphere,
            velocity: new THREE.Vector3(1, 1, 1), // Initial velocity
            mass: 1
        });

        // serve 
        Objects[Objects.length - 1].velocity.set(BallCreator.serve_x, BallCreator.serve_y, BallCreator.serve_z); 

    New_ball_launched = true;
}

const BallCreator = {
    serve_x: 0,
    serve_y: -4.65,
    serve_z: 26.5,

    hit_x  : 0,
    hit_y  : -4.65,
    hit_z  : 26.5,

    cameraFixed: false 
}


BallCreator.serve_x = 0;
BallCreator.serve_y = 3.4;
BallCreator.serve_z = 21.5;

BallCreator.hit_x   = 0;
BallCreator.hit_y   = 3.2;
BallCreator.hit_z   = 22;

BallCreator.reset = () => {
    for (const object of Objects){
        scene.remove(object.sphere);
    }
    Objects.splice(0, Objects.length)
}

BallCreator.createBall = () => {
    let x = (Math.random() - 0.5) * 4
    let y = 4.92;
    let z = -10.1;
    
    createSphere(new THREE.Vector3(paddle.position.x, y, -paddle.position.z), BallCreator.serve_x, BallCreator.serve_y, BallCreator.serve_z)
}

gui.add(BallCreator, 'createBall')
gui.add(BallCreator, 'reset')

gui.add(BallCreator, 'serve_x',  -20,  70).step(0.05)
gui.add(BallCreator, 'serve_y',  -20,  70).step(0.05)
gui.add(BallCreator, 'serve_z',  -20,  70).step(0.05)

gui.add(BallCreator, 'hit_x', -20,  70).step(0.05)
gui.add(BallCreator, 'hit_y', -20,  70).step(0.05)
gui.add(BallCreator, 'hit_z', -20,  70).step(0.05)

//Table 
const geometry       = new THREE.BoxGeometry( 1, 1, 1 ); 
const material       = new THREE.MeshBasicMaterial( {color: 0xffffff} );
material.transparent = true; 
const Table          = new THREE.Mesh( geometry, material ); 

Table.position.x = -0.01;
Table.position.y = 4.15;
Table.position.z = -0.06;

Table.scale.set(8.28, 0.3, 18.51)

//Net
const Net = new THREE.Mesh( geometry, material ); 
Net.position.x = 0;
Net.position.y = 4.66;
Net.position.z = -0.02;
Net.scale.set(10.29, 1, 0.05)

// mouse event listener

let mouseDirection = 0;
let prevMouseX = 0;


//event listeners

const handleMouseMove = (info) => {
    mouse.x = (info.clientX/window.innerWidth)*2-1;
    mouse.y = -((info.clientY/window.innerHeight)*2-1);
    
    mouseDirection = mouse.x > prevMouseX ? 1 : -1;
    prevMouseX = mouse.x;
};

const handleKeyDown = (event) => {
    const keyName = event.key;
  
      if (keyName === "r"){
          BallCreator.createBall()
      }
      if (keyName === "t"){
          BallCreator.reset()
      }
      if (keyName === "v"){
          BallCreator.cameraFixed = true;
      }
      if (keyName === "b"){
          BallCreator.cameraFixed = false;
      }
};
//


const mouse = new THREE.Vector2();
window.addEventListener('mousemove', handleMouseMove)

document.addEventListener("keydown", handleKeyDown)

// enviroment map
const rgbeLoader = new RGBELoader(loadingManager);
rgbeLoader.load('/models/neon_photostudio_2k.hdr', (enviroment_map) => {
    enviroment_map.mapping = THREE.EquirectangularReflectionMapping
    scene.background  = enviroment_map;
    scene.environment = enviroment_map;
    
    scene.backgroundBlurriness = 0.5; 
    scene.environmentIntensity = 0.01; 
    scene.backgroundIntensity  = 0.007;
})

const BallBoundingBox     = new THREE.Box3();
const PaddleBoundingBox   = new THREE.Box3();
const PaddleBoundingAiBox = new THREE.Box3();
const TableBoundingBox    = new THREE.Box3();
const NetBoundingBox      = new THREE.Box3();

const PaddleBoxHelper   = new THREE.Box3Helper(PaddleBoundingBox, 0xff0000);
const PaddleAiBoxHelper = new THREE.Box3Helper(PaddleBoundingAiBox, 0xff0000);
const BallBoxHelper     = new THREE.Box3Helper(BallBoundingBox, 0xff0000);
const TableBoxHelper    = new THREE.Box3Helper(TableBoundingBox, 0xff0000);
const NetHelper         = new THREE.Box3Helper(NetBoundingBox, 0xff0000);

// scene.add(PaddleBoxHelper);
// scene.add(PaddleAiBoxHelper);
// scene.add(BallBoxHelper);
// scene.add(TableBoxHelper);
// scene.add(NetHelper);

function checkCollision() {
    if (Objects.length){
        // Update bounding boxes with the current positions of the models
        PaddleBoundingBox.setFromObject(paddle);
        PaddleBoundingAiBox.setFromObject(paddleAi);
        BallBoundingBox.setFromObject(Objects[Objects.length - 1].sphere);
        NetBoundingBox.setFromObject(Net)
        TableBoundingBox.setFromObject(Table)
        
        if (PaddleBoundingBox.intersectsBox(BallBoundingBox) && Objects[Objects.length - 1].velocity.z > 0) {
            

            // console.log('paddle and ball!');
            // let intensity = Math.max( Math.min((5.5 / Math.abs(paddle.position.x)), 0), 3);  
            let intensity = Math.max((3 - (Math.abs(paddle.position.x))), 0);
            if (paddle.position.x > 0 && mouseDirection < 0){
                intensity = Math.abs(paddle.position.x) * 0.5;
            }
            if (paddle.position.x < 0 && mouseDirection > 0){
                intensity = Math.abs(paddle.position.x) * 0.5;
            }    
            let forceX = (intensity * mouseDirection)

            // console.log(forceX > 0 ? "right" : "left");

            //for push Sumilation
            gsap.to(paddle.rotation, {
                x: paddle.rotation.x - 0.5,
                duration: 0.1,
                ease: "power3.out"
            })
            Pong_Ball_colide(0.54);
            
            Objects[Objects.length - 1].velocity.set( forceX,//BallCreator.hit_x,        
                                                      BallCreator.hit_y,        
                                                      -BallCreator.hit_z
            )
        }
        else if (PaddleBoundingAiBox.intersectsBox(BallBoundingBox) && Objects[Objects.length - 1].velocity.z < 0){
            
            // console.log('paddleAi and ball!');                        
            // let intensity = Math.max( Math.min((5.5 / Math.abs(paddle.position.x)), 0), 3);  
            // let intensity = 3 - (Math.abs(Objects[Objects.length - 1].sphere.position.x) * 2/5);                
            // let forceX = (intensity * mouseDirection)

            // console.log(forceX > 0 ? "right" : "left");
            
            //for push Sumilation
            gsap.to(paddleAi.rotation, {
                x: paddleAi.rotation.x + 0.5,
                duration: 0.1,
                ease: "power3.out"
            })
            Pong_Ball_colide(0.54);
            
            // Objects[Objects.length - 1].velocity.set( forceX,//BallCreator.hit_x,        
            Objects[Objects.length - 1].velocity.set( BallCreator.hit_x,        
                                                      BallCreator.hit_y,        
                                                      BallCreator.hit_z
            )
        }
        
        else if (NetBoundingBox.intersectsBox(BallBoundingBox)) {
            // console.log('ball collided with the Net!');
            // Objects[Objects.length - 1].sphereBody.velocity.z = -(Objects[Objects.length - 1].sphereBody.velocity.z) * 0.5; //Good !
            // Good just need to get the best velocity values

            // const normalVelocity = Objects[Objects.length - 1].velocity.dot(new THREE.Vector3(0, 0, 1)); // Extract velocity along the normal
            // Objects[Objects.length - 1].velocity.z = ((Objects[Objects.length - 1].velocity.y) > 0 ? 1 : -1 ) * restitution;

            // // Apply friction to X and Y velocity components
            // Objects[Objects.length - 1].velocity.x *= friction;
            // Objects[Objects.length - 1].velocity.y *= friction;

            // // Prevent sinking into the net by repositioning the ball
            // const ballDepth = BallBoundingBox.max.z - BallBoundingBox.min.z;
            // if (Objects[Objects.length - 1].sphere.position.z > NetBoundingBox.max.z) {
            //     Objects[Objects.length - 1].sphere.position.z = NetBoundingBox.max.z + ballDepth / 2; // Ball is on one side of the net
            // } else {
            //     Objects[Objects.length - 1].sphere.position.z = NetBoundingBox.min.z - ballDepth / 2; // Ball is on the other side of the net
            // }
        }
        else if (TableBoundingBox.intersectsBox(BallBoundingBox)) {
            // console.log('ball collided with the Table!');
            // Collision with the table (restitution + friction) tobeadded
            Pong_Ball_colide(0.85);
            
            // Apply friction to X and Z velocity components
            Objects[Objects.length - 1].velocity.x *= friction;
            Objects[Objects.length - 1].velocity.z *= friction;

            // Reverse the Y velocity for bounce and apply restitution
            Objects[Objects.length - 1].velocity.y *= -restitution;

            // Prevent sinking into the table by repositioning the ball
            const ballHeight = BallBoundingBox.max.y - BallBoundingBox.min.y;
            Objects[Objects.length - 1].sphere.position.y = TableBoundingBox.max.y + ballHeight / 2; // Place the ball on the table
        }
    }
}

scene.add(new THREE.GridHelper( 50, 50 ))
// scene.add(new THREE.AxesHelper( 50 ))

gui.add(BallCreator, 'cameraFixed');

//Scoring System
let PlayerScore = 0;
let AiScore     = 0;
let New_ball_launched = false;

function updateScoreboard() {
    scoreBoard.innerText = `Player : ${PlayerScore} - AI_bot : ${AiScore}`;
}

//  Animate
const clock = new THREE.Clock()
let   deltaTime    = 0;

let   angle = 0; // Start angle for rotation
const radius = 22; // Distance from the center of the object
const target = new THREE.Vector3(0, 0, 0);

const tick = () =>
{
    deltaTime = clock.getDelta();

    angle += 0.005;

    // camera.position.x += deltaTime/10 * (target.x + radius * Math.cos(angle));
    // camera.position.z += deltaTime/10 * (target.z + radius * Math.sin(angle));
    // camera.position.y += deltaTime/10 * 9;e

    
    for (const obj of Objects) {        
        // Apply Gravity
        obj.velocity.y += gravity * deltaTime;
        
        // Update position
        obj.sphere.position.x += obj.velocity.x * deltaTime;
        obj.sphere.position.y += obj.velocity.y * deltaTime;
        obj.sphere.position.z += obj.velocity.z * deltaTime;

    }
    
    if (Objects.length && paddleAi){
        paddleAi.position.x = Objects[Objects.length - 1].sphere.position.x; 
        paddleAi.position.y = Objects[Objects.length - 1].sphere.position.y - 0.4;
        
        //Scoring System
        if (New_ball_launched){
            if (Objects[Objects.length - 1].sphere.position.z > (paddle.position.z + 1)) {
                AiScore += 1;
                New_ball_launched = false;
                updateScoreboard()
            } else if (Objects[Objects.length - 1].sphere.position.z < (paddleAi.position.z - 1)) {
                PlayerScore += 1;
                New_ball_launched = false;
                updateScoreboard()
            }
        }
    
        if (PlayerScore === 7 || AiScore === 7) {
            updateScoreboard()
            alert(`${PlayerScore === 7 ? 'Player' : 'Ai'} Wins!`);
            PlayerScore = 0;
            AiScore = 0;
            updateScoreboard()
        }
    }
    
    if (BallCreator.cameraFixed){
        console.log(paddle.position);

        camera.position.x = 0;
        camera.position.y = 7.8;
        camera.position.z = 12.8;
        camera.position.x = (4 * mouse.x);
        camera.position.y = (6.8 + ( 1 * mouse.y));
        
        paddle.position.x = (5.5 * mouse.x);
        // paddle.position.z = (11 - Math.abs((2 * mouse.x))); // edge effect
        paddle.position.y = (5.03 + (2 * mouse.y));
        
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

        if (paddleAi.position.x > 0){
            gsap.to(paddleAi.rotation, {
                x: 2.81,
                y: 2.96,
                z: 2.81,
                duration: 0.095,
                ease: "power2.inOut",
            });
        }
        else{
            gsap.to(paddleAi.rotation, {
                x: 2.81,
                y: 6.28,
                z: 2.81,
                duration: 0.095,
                ease: "power2.inOut",
            });
        }
        
    }

    checkCollision();

    topControls.update()
    // stat.update()
    
    renderer.render(scene, camera)

    renderer.setAnimationLoop(tick);
}

tick()