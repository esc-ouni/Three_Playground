import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DragControls } from 'three/examples/jsm/controls/DragControls.js'
import GUI from 'lil-gui'
import gsap from 'gsap'


import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js'


const loadingScreen = document.getElementById('loading-screen');

const loadingManager = new THREE.LoadingManager();

///Music
const hit_sound = new Audio('/models/passion.mp3');
const move_sound = new Audio('/sounds/move.mp3');
///

loadingManager.onLoad = function () {
    hit_sound.play();
    gsap.to(loadingScreen, { opacity: 0, duration: 1, onComplete: () => {
        loadingScreen.style.display = 'none';
    }});
};


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
// scene.add(floor)

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 2.4)
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

let objects = []

//  Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//

//GLTF Loading
const GLTFLoaderr = new GLTFLoader(loadingManager);

GLTFLoaderr.load(
    '/models/round_wooden_table_01_4k.gltf/round_wooden_table_01_4k.gltf',
    function ( gltf ) {
        gltf.scene.children[0].position.y = 0;
        // gui.add(gltf.scene.children[0].position, 'y', -50, 1).step(1);
        scene.add( gltf.scene.children[0] ); //Jilali Table
    }
);



GLTFLoaderr.load(
    '/models/chess_set_4k.gltf/chess_set_4k.gltf',
	function ( gltf ) {
        let x = 0;
        let Board;
        let z = -0.2;
        let item;

        // 1st Method 
        // Testing right apraoch
        // let posx = -0.36;
		// while (gltf.scene.children.length){
        //     item = gltf.scene.children[0];
        //     if (x >= 16){
            //         z = -0.25;
        //         posx = -1.15;
        //     }
        //     if (item.name === "board"){
        //         Board = item;
        //         item.position.y = 1.004;
        //         item.position.x = 0;
        //         item.position.z = 0.179;
        //         x -= 1;                    
        //     }
        //     else{
            //         objects.push(item)
        //         item.position.y = 1.004;
        //         item.position.x = posx + (0.05 * x);
        //         item.position.z = z;
        //     }
        //     scene.add(item)
        
        //     x += 1;
        // }
        
        // 2nd Method 
        while (gltf.scene.children.length){
            item = gltf.scene.children[0];
            if (item.name === "board"){
                item.position.y = 1.004;
            }
            else{
                objects.push(item)
                item.position.y = 1.0215;
            }
            scene.add(item)
        }
    }
);

let dragg = false
let controls2; 



//
// //Enviroment Map
// const rgbeLoader = new RGBELoader();
// rgbeLoader.load('/models/envmap/photo_studio_loft_hall_8k.pic', (enviroment_map) => {
//     enviroment_map.mapping = THREE.EquirectangularReflectionMapping
//     scene.background  = enviroment_map;
//     scene.environment = enviroment_map;
// })

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

let cinm = true;

function setPlayerPov(){
    camera.position.set(0.011, 1.3785, camera.position.z > 0 ? -0.4220:0.4220)
    cinm = false;
}

const handleKeyDown = (event) => {
    const keyName = event.key;

    if (keyName === " "){
        setPlayerPov();
    }
};
document.addEventListener("keydown", handleKeyDown)
controls2 = new DragControls( objects, camera, canvas );
    
// add event listener to highlight dragged objects

const MAX_HEIGHT = 1.03; // Set your desired maximum height

controls2.addEventListener('drag', function (event) {
    // console.log( event.object.name , ' : hello, I\'m being draged !');
    // Clamp the y position to not exceed MAX_HEIGHT
    if (event.object.position.y > MAX_HEIGHT) {
        event.object.position.y = MAX_HEIGHT;
    }
    if (event.object.position.y <= 1.021) {
        event.object.position.y = 1.021;
    }
});

///l
let init_pos_x, init_pos_y;
controls2.addEventListener( 'dragstart', function ( event ) {

    controls.enabled = false
    event.object.material.emissive.set( 0xaaaaaa );
    init_pos_x = event.object.position.x;
    init_pos_y = event.object.position.z;
    
} );

///Edge Case
function isNegativeZero(value) {
    return value === 0 && (1 / value) === -Infinity;
}
///



///Get The position World to matrix
const RATIO_FACTOR    = 19.74;
const SQUARE_DIAMETER = 0.058;
const SQUARE_RADIUS   = 0.029;

///Validator
function Validator(pos) {
    let cords = WorldToMatrix(pos.x, pos.z);

    if ((cords[0] > 4 || cords[0] < -4) || (cords[1] > 4 || cords[1] < -4)){
        pos.x = init_pos_x;
        pos.z = init_pos_y;
        return ;
    }
    move_sound.play();
    pos.x =  -((cords[0] > 0 ? cords[0] - 1: cords[0]) * SQUARE_DIAMETER) - SQUARE_RADIUS;
    pos.z =   ((cords[1] > 0 ? cords[1] - 1: cords[1]) * SQUARE_DIAMETER) + SQUARE_RADIUS;
}
///

function WorldToMatrix(world_x, world_y){
    let x = -Math.round(world_x * RATIO_FACTOR);
    let y =  Math.round(world_y * RATIO_FACTOR);
    
    if (x === 0 && isNegativeZero(x)){
        x = -1
    }
    else if (x === 0 ){
        x = 1
    }
    if (y === 0 && isNegativeZero(y)){
        y = -1
    }
    else if (y === 0){
        y = 1
    }
    // console.log("x : ",  x,", y : ", y);
    return [x, y];
}
///

controls2.addEventListener( 'dragend', function ( event ) {
    controls.enabled = true
    event.object.material.emissive.set( 0x000000 );
    event.object.position.y = 1.0215;

    Validator(event.object.position);

} );
//

////BUttona
let button = document.getElementById ('mybutton');
button.addEventListener('click', setPlayerPov);
///

//  Animate
let cameraAngle  = 0;
let cameraHeight = 0.9;
let cameraRadius = 2; // Adjust based on your scene scale
//

let ah = new THREE.AxesHelper(15);
// ah.position.y = 1.022;
// scene.add(ah)
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    if (objects.length && dragg === false){
        dragg = true;
        // console.log('Drag activated !');
    }

    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    if (cinm){
        cameraAngle += 0.007;
        cameraHeight += 0.0007;
        camera.position.x = Math.cos(cameraAngle) * (cameraRadius - cameraHeight);
        camera.position.z = Math.sin(cameraAngle) * (cameraRadius - cameraHeight);
        camera.position.y = cameraHeight;
        
        if (cameraHeight > 3) cameraHeight = 0.9;

        camera.lookAt(0, 0, 0);
    }

    // Update controls
    controls.update()

    // console.log(camera.position);

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
